import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-website-acknowledgement',
	templateUrl: './website-acknowledgement.component.html',
	styleUrls: ['./website-acknowledgement.component.scss'],
})
export class WebsiteAcknowledgementComponent {
	@Input() symposium;

	constructor() {
	}

}
