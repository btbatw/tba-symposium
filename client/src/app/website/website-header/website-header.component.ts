import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-website-header',
	templateUrl: './website-header.component.html',
	styleUrls: ['./website-header.component.scss']
})
export class WebsiteHeaderComponent {
	@Input() symposium;
	constructor() { }

	keysOfObj(obj) {
		return Object.keys(obj);
	}

	showPageLink(identifier, key, obj) {
		return !obj[key][identifier] ? false : obj[key][identifier];
	}
}
