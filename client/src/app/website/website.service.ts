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
	public infoSession;

	constructor(private http: HttpClient) { }

	getSymposium() {
		// return this.http
		// 	.get('api/symposium/59a768dec853bd1942bd5e71')
		// 	.map(this.extractData)
		return fromPromise(Promise.resolve([ttbaSymposium2017]))
			.map(data => {
				this.parseSpeakers(data[0]);
				this.parseInfoSessionSpeakersGroups(data[0]);
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
		let allSpeakers = [];
		data.talk.schedules
			.forEach(element => {
				if (!element.speakers[0] || !element.speakers[0].name) { return; }
				let schedule = { ...element };
				delete schedule.speakers;
				let parsedSpeakers = element.speakers.map(element =>
					element = { ...element, ...schedule }
				);
				element.speakers = parsedSpeakers;
				allSpeakers = [...allSpeakers, parsedSpeakers];
			});
		this.speakers = allSpeakers
			.reduce((prev, curr) => [...prev, ...curr], [])
			.sort((a, b) => {
				return a.title.includes('Keynote')
					? -1
					: b.title.includes('Keynote')
					? 1
					: new Date(a.from).getTime() - new Date(b.from).getTime();
			});
	}

	private parseInfoSessionSpeakersGroups(data) {
		let infoSession = data.talk.schedules.find(element => element.title === 'Information session');
		if (!infoSession) { return; }
		let infoSessionSpeakers = [ ...this.speakers ];
		infoSession.speakers = infoSessionSpeakers
			// .filter(element => false)
			// .filter(element => element.name)
			.filter(element => element.infoSession)
			.sort((a, b) => {
				let titleA = a.infoSession;
				let titleB = b.infoSession;
				return titleA === titleB
					? 0
					: titleA > titleB
					? 1
					: -1;
			})
			.reduce((prev, curr, idx) => {
				return idx === 0
					? [[curr]]
					: prev.slice(-1)[0][0].infoSession === curr.infoSession
					? [...prev.slice(0, -1), [...prev.slice(-1)[0], curr]]
					: [...prev, [curr]];
				// if (idx === 0) { return [[curr]]; }
				// let last = prev[prev.length - 1];
				// if (last[0].infoSession === curr.infoSession) {
				// 	last.push(curr);
				// 	return prev;
				// } else {
				// 	prev.push([curr]);
				// 	return prev;
				// }
			}, []);
		return infoSession;
	}

	private extractData(res: Response): any {
		let body = res.json();
		return body || [];
	}
}
