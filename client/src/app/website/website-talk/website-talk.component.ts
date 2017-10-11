import { Component, Input } from '@angular/core';
import * as moment from 'moment-timezone';

import { MdDialog } from '@angular/material';
import { SpeakerDetailDialog } from './website-talk-speaker/speaker-detail-dialog/speaker-detail-dialog.component';


import {
	trigger,
	style,
	animate,
	transition,
	group,
	state
} from '@angular/animations';

@Component({
	selector: 'app-website-talk',
	templateUrl: './website-talk.component.html',
	styleUrls: ['./website-talk.component.scss'],
	animations: [
		trigger('itemAnim', [
			transition(':enter', [
				style({ height: 0 }),
				animate('0.1s ease-out', style({ height: '*' }))
			]),
			transition(':leave', [
				style({ height: '*' }),
				animate('0.1s ease-in', style({ height: 0 }))
			])
		]),
		trigger('focusPanel', [
			state('close', style({
				// transform: 'rotate(90deg)',
			})),
			state('open', style({
				transform: 'rotate(90deg)',
			})),
			transition('close => open', animate('100ms ease-out')),
			transition('open => close', animate('100ms ease-in'))
		])
	]
})
export class WebsiteTalkComponent {
	@Input() speakers;
	@Input() symposium;
	showing = [];

	constructor(public dialog: MdDialog) {
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

	toggleShow(title) {
		this.showing.includes(title) ?
			this.showing = this.showing.filter(element => element !== title) :
			this.showing = [title, ...this.showing];
	}

	openDialog(data) {
		this.dialog.open(SpeakerDetailDialog, {
			data: data
		});
	}

}
