import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-website-elevator-talk',
	templateUrl: './website-elevator-talk.component.html',
	styleUrls: ['./website-elevator-talk.component.scss']
})
export class WebsiteElevatorTalkComponent {
	@Input() symposium;

	constructor() { }

}
