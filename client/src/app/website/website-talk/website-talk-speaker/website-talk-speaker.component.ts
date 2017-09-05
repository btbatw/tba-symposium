import { Component, Input } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
	selector: 'app-website-talk-speaker',
	templateUrl: './website-talk-speaker.component.html',
	styleUrls: ['./website-talk-speaker.component.scss']
})
export class WebsiteTalkSpeakerComponent {
	@Input() speakers;

	constructor() { }

	formatTimeChicago(dateStr, format) {
		return moment(dateStr).tz('America/Chicago').format(format);
	}
}
