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
				transform: 'rotate(0deg)',
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
	tabIndex = 0;
	reRender = true; // for proper display childAnimation

	constructor(public dialog: MdDialog) {
	}

	formatTimeFromSetting(dateStr, format) {
		return moment(dateStr).tz(
			this.symposium.symposiumInfo.timeZone
		).format(format);
	}

	filterDate(schedules, dateNum) {
		return schedules
			.filter(element =>
				moment(element.from).tz(
					this.symposium.symposiumInfo.timeZone
				).format('D') === dateNum.toString()
			);
	}

	toggleShow(title) {
		this.showing.includes(title) ?
			this.showing = this.showing.filter(element => element !== title) :
			this.showing = [title, ...this.showing];
	}

	openDialog(data) {
		this.dialog.open(SpeakerDetailDialog, {
			data: Object.assign(data, {timeZone: this.symposium.symposiumInfo.timeZone})
		});
	}

	toggleTab() {
		this.tabIndex = (this.tabIndex + 1) % 2;
	}

	scrollTo(link = 'talk') {
		// document.getElementById(link).scrollIntoView({ behavior: 'smooth' });
		const stickyNavEl = <HTMLElement> document.querySelector('.nav-content');
		const navHeight = stickyNavEl.offsetHeight;
		const elTop = document.getElementById(link).offsetTop;
		window.scroll({ top: elTop - navHeight, left: 0, behavior: 'smooth' });
		setTimeout(() => this.toggleTab(), 300);
	}

	onSelectedIndexChange(number) {
		this.tabIndex = number;
		this.reRender = false;
		setTimeout(() => this.reRender = true, 0);
	}

}
