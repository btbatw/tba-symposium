import { Component, OnInit, Input, Inject } from '@angular/core';

import { MdDialog } from '@angular/material';
import { HotelDetailDialog } from './hotel-detail-dialog/hotel-detail-dialog.component';
// import {} from
@Component({
	selector: 'app-website-location',
	templateUrl: './website-location.component.html',
	styleUrls: ['./website-location.component.scss']
})
export class WebsiteLocationComponent implements OnInit {
	@Input() symposium;
	lat;
	lng;

	constructor(public dialog: MdDialog) { }

	ngOnInit() {
		this.parseLatLng();
	}

	parseLatLng() {
		[this.lat, this.lng] = this.symposium.location.googleMapLink
			.split('/')
			.filter(element => element.includes('@'))[0]
			.slice(1)
			.split(',')
			.map(element => Number(element));
	}

	openDialog() {
		this.dialog.open(HotelDetailDialog, {
		});
	}

	goToLink(link) {
		window.open(link, '_blank');
	}

}
