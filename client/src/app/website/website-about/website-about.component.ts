import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-website-about',
	templateUrl: './website-about.component.html',
	styleUrls: ['./website-about.component.scss']
})
export class WebsiteAboutComponent {
	@Input() symposium;
	constructor() { }

	ngOnInit() {
	}

	goToLink(link) {
		window.open(link, '_blank');
	}
}
