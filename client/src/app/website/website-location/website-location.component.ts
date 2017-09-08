import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-website-location',
	templateUrl: './website-location.component.html',
	styleUrls: ['./website-location.component.scss']
})
export class WebsiteLocationComponent implements OnInit {
	@Input() symposium;
	lat;
	lng;

	constructor() { }

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

}
