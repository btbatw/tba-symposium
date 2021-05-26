import { Component, Input, Inject } from '@angular/core';


@Component({
	selector: 'app-website-acknowledgement-commitee',
	templateUrl: './website-acknowledgement-commitee.component.html',
	styleUrls: ['./website-acknowledgement-commitee.component.scss']
})
export class WebsiteAcknowledgementCommiteeComponent {
	@Input() speakers;

	constructor() { }

	goToLink(link) {
		window.open(link, '_blank');
	}
}
