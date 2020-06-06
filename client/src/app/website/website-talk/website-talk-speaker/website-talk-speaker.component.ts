import { Component, Input, Inject } from '@angular/core';
import * as moment from 'moment-timezone';

import { MdDialog } from '@angular/material';
import { SpeakerDetailDialog } from './speaker-detail-dialog/speaker-detail-dialog.component';

@Component({
	selector: 'app-website-talk-speaker',
	templateUrl: './website-talk-speaker.component.html',
	styleUrls: ['./website-talk-speaker.component.scss']
})
export class WebsiteTalkSpeakerComponent {
	@Input() speakers;
	@Input() timeZone;

	constructor(public dialog: MdDialog) { }

	formatTimeFromSetting(dateStr, format) {
		return moment(dateStr).tz(this.timeZone).format(format);
	}

	openDialog(data) {
		this.dialog.open(SpeakerDetailDialog, {
			data: Object.assign(data, {timeZone: this.timeZone}),
		});
	}

	goToLink(link) {
		window.open(link, '_blank');
	}
}
