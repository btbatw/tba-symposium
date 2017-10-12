import { Component, OnInit } from '@angular/core';

import { WebsiteService } from './website.service';

import { OverlayContainer } from '@angular/material';

@Component({
	selector: 'app-website',
	templateUrl: './website.component.html',
	styleUrls: ['./website.component.scss'],
	providers: [WebsiteService]
})
export class WebsiteComponent implements OnInit {
	symposium;
	speakers;

	private themeBright = 'amber-blue-theme quicksand-typography';
	private themeTechie = 'white-light-blue-theme roboto-typography';

	websiteTheme = this.themeBright;

	constructor(private websiteService: WebsiteService, private overlayContainer: OverlayContainer) { }

	ngOnInit() {
		this.websiteTheme.split(' ')
			.forEach((theme) => this.modifyClassToOverlayContainer(theme, 'add'));
		this.websiteService.getSymposium()
			.subscribe(result => {
				this.symposium = result[0];
				this.speakers = this.websiteService.speakers;
			});
	}
	test() {
		this.websiteTheme.split(' ')
			.forEach((theme) => this.modifyClassToOverlayContainer(theme, 'remove'));
		this.websiteTheme = this.websiteTheme === this.themeBright
			? this.themeTechie
			: this.themeBright;
		this.websiteTheme.split(' ')
			.forEach((theme) => this.modifyClassToOverlayContainer(theme, 'add'));
	}
	modifyClassToOverlayContainer(theme, operation) {
		const containerClassList = this.overlayContainer.getContainerElement().classList;
		return operation === 'add'
			? containerClassList.add(theme)
			: operation === 'remove'
			? containerClassList.remove(theme)
			: console.error('operation must be either "add" or "remove"');
	}
}
