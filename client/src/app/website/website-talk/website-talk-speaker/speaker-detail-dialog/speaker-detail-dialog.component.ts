import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment-timezone';


@Component({
	selector: 'speaker-dteail-dialog',
	templateUrl: './speaker-detail-dialog.component.html',
	styleUrls: ['./speaker-detail-dialog.component.scss']
})
export class SpeakerDetailDialog {

	constructor( @Inject(MD_DIALOG_DATA) public data: any) { }

	formatTimeChicago(dateStr, format) {
		return moment(dateStr).tz('America/Chicago').format(format);
	}
}
