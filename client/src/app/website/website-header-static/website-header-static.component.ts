import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-website-header-static',
	templateUrl: './website-header-static.component.html',
	styleUrls: ['./website-header-static.component.scss']
})
export class WebsiteHeaderStaticComponent {
	@Input() symposium;

	constructor() {
	}

	keysOfObj(obj) {
		return Object.keys(obj);
	}
}
