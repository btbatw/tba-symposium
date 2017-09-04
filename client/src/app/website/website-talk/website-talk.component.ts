import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-website-talk',
	templateUrl: './website-talk.component.html',
	styleUrls: ['./website-talk.component.scss']
})
export class WebsiteTalkComponent {
	@Input() speakers;
	@Input() symposium;

	constructor() { }

}
