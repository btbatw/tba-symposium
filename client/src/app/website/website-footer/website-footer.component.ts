import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-website-footer',
	templateUrl: './website-footer.component.html',
	styleUrls: ['./website-footer.component.scss']
})
export class WebsiteFooterComponent {
	@Input() symposium;

	constructor() { }

	goToLink(link) {
		window.open(link, '_blank');
	}

}
