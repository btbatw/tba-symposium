import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-website-header',
	templateUrl: './website-header.component.html',
	styleUrls: ['./website-header.component.scss']
})
export class WebsiteHeaderComponent {
	@Input() symposium;

	constructor() {
	}

	keysOfObj(obj) {
		return Object.keys(obj);
	}

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
		return str.replace( /([A-Z])/g, ' $1' ).trim();
	}

	goToLink(link) {
		window.open(link, '_blank');
	}

}
