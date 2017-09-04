import { Component, OnInit } from '@angular/core';

import { WebsiteService } from './website.service';

@Component({
	selector: 'app-website',
	templateUrl: './website.component.html',
	styleUrls: ['./website.component.scss'],
	providers: [WebsiteService]
})
export class WebsiteComponent implements OnInit {
	symposium;
	speakers;
	constructor(private websiteService: WebsiteService) { }

	ngOnInit() {
		this.websiteService.getSymposium()
			.subscribe(result => {
				this.symposium = result[0];
				this.speakers = this.websiteService.speakers;
			});
	}
}
