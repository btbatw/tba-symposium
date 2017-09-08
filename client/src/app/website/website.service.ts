import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { fromPromise } from 'rxjs/observable/fromPromise';

import { ttbaSymposium2017 } from './symposium-ttba-2017';

@Injectable()
export class WebsiteService {
	private url = '/admin';
	public speakers;

	constructor(private http: HttpClient) { }

	getSymposium() {
		// return this.http
		// 	.get('api/symposium/59a768dec853bd1942bd5e71')
		// 	.map(this.extractData)
		return fromPromise(Promise.resolve([ttbaSymposium2017]))
			.map(data => {
				this.speakers = this.parseSpeakers(data[0]);
				return data;
			});
	}

	// getSymposiumFromGithub() {
	// 	const test = require('https://github.com/Yu-AnChen/tba-symposium/blob/master/client/src/app/website/symposium-ttba-2017.ts');
	// 	console.log(test);
	// let headers = new HttpHeaders().set('accept', 'application/vnd.github.VERSION.raw');
	// console.log(headers);
	// return this.http
	// 	.get('https://api.github.com/repos/yu-anchen/tba-symposium/contents/client/src/app/website/symposium-ttba-2017.ts',
	// 		{
	// 			headers: new HttpHeaders().set('accept', 'application/vnd.github.VERSION.raw'),
	// 			observe: 'response',
	// 			responseType: 'text'
	// 		}
	// 	)
	// 	.subscribe(data => console.log(data));
	// }
	private parseSpeakers(data) {
		return data.talk.schedules
			.filter(element => element.speakers[0])
			.filter(element => element.speakers[0].name)
			.map(element => {
				let schedule = { ...element };
				delete schedule.speakers;
				return element.speakers.map(element =>
					element = { ...element, ...schedule }
				);
			})
			.reduce((prev, curr) => [...prev, ...curr], [])
			.sort((a, b) => {
				let titleA = a.title.split(':')[0];
				let titleB = b.title.split(':')[0];
				return titleA === titleB ? 0 :
					titleA > titleB ? 1 : -1;
			});
	}

	private extractData(res: Response): any {
		let body = res.json();
		return body || [];
	}
}
