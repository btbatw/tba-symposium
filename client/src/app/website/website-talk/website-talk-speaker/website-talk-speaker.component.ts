import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-website-talk-speaker',
	templateUrl: './website-talk-speaker.component.html',
	styleUrls: ['./website-talk-speaker.component.scss']
})
export class WebsiteTalkSpeakerComponent {
	@Input() speakers;

	constructor() { }
}
