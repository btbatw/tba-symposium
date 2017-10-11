import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-website-nav',
	templateUrl: './website-nav.component.html',
	styleUrls: ['./website-nav.component.scss']
})
export class WebsiteNavComponent {
	@Input() symposium;
	@Input() isSticky;

	constructor() { }

	getPageLinks(identifier, obj) {
		return Object.keys(obj)
			.filter(element =>
				!obj[element][identifier] ? false : obj[element][identifier]
			);
		// return !obj[key][identifier] ? false : obj[key][identifier];
	}

	scrollTo(link) {
		document.getElementById(link).scrollIntoView({ behavior: 'smooth' });
	}

	parseCamelCase(str) {
		return str.replace(/([A-Z])/g, ' $1').trim();
	}

	goToLink(link) {
		window.open(link, '_blank');
	}
}
