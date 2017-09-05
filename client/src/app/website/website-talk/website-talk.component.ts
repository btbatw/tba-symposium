import { Component, Input } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
	selector: 'app-website-talk',
	templateUrl: './website-talk.component.html',
	styleUrls: ['./website-talk.component.scss']
})
export class WebsiteTalkComponent {
	@Input() speakers;
	@Input() symposium;

	constructor() {
	}

	formatTimeChicago(dateStr, format) {
		return moment(dateStr).tz('America/Chicago').format(format);
	}

	filterDate(schedules, dateNum) {
		return schedules
			.filter(element =>
				new Date(element.from).getDate() === Number(dateNum)
			);
	}

}
