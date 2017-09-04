import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WebsiteService {
	private url = '/admin';
	public speakers;

	constructor(private http: Http) { }

	getSymposium() {
		return this.http
			.get('api/symposium/59a768dec853bd1942bd5e71')
			.map(this.extractData)
			.map(data => {
				this.speakers = this.parseSpeakers(data[0]);
				return data;
			});
	}

	private parseSpeakers(data) {
		return data.talk.schedules
			.filter(element => element.speakers[0])
			.filter(element => element.speakers[0].name)
			.map(element => {
				let schedule = { ...element };
				delete schedule.speakers;
				return element.speakers.map(element =>
					element = { ...element, ...schedule}
				);
			})
			.reduce((prev, curr) => [...prev, ...curr], []);
	}

	private extractData(res: Response): any {
		let body = res.json();
		return body || [];
	}
}
