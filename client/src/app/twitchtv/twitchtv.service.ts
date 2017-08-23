import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TwitchtvService {
	private url = 'https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/';

	constructor(private http: Http) { }

	getStreamer(channelName: string) {
		// let url = 'https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/';
		return this.http
			.get(this.url + 'streams/' + channelName)
			.map(this.extractData);
	}

	getChannel(channelName) {
		return this.http
			.get(this.url + 'channels/' + channelName)
			.map(this.extractData);
	}

	private extractData(res: Response): any {
		let body = res.json();
		return body || [];
	}
}
