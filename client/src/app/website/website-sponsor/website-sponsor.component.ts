import { Component, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
	selector: 'app-website-sponsor',
	templateUrl: './website-sponsor.component.html',
	styleUrls: ['./website-sponsor.component.scss']
})
export class WebsiteSponsorComponent {
	@Input() symposium;
	displayedColumns = ['package', 'price', 'programBook', 'onlineMedia*', 'slideShow', 'booth', 'registration**'];
	referenceColumns = ['package', 'price', 'programBook', 'onlineMedia', 'slideShow', 'booth', 'registration'];
	sponsorTabledataSource = new SponsorTableDataSource();

	sponsorImgs = [
		'taiwan_ministry_of_science_and_technology.png',
		'teco_S_and_T_logo.png'
		//'teco_houston_techno.png',
		//'hsinchu_sci_park.png',
		//'biovision.png'
	];

	constructor() { }

	parseCamelCase(str) {
		return str.replace( /([A-Z])/g, ' $1' ).trim();
	}

	number(str) {
		return Number(str);
	}

	goToLink(link) {
		window.open(link, '_blank');
	}
	// stripStr(str) {
	// 	return str.replace(/\W+/g, '');
	// }

}

export interface Element {
	package: string;
	price: number;
	programBook: string;
	onlineMedia: string;
	slideShow: string;
	booth: string;
	registration: number;
}

const data: Element[] = [
	{
		package: 'platinum',
		price: 1000,
		programBook: '1 page',
		onlineMedia: 'V',
		slideShow: 'V',
		booth: 'V',
		registration: 3
	},
	{
		package: 'gold',
		price: 800,
		programBook: '1/2 page',
		onlineMedia: 'V',
		slideShow: 'V',
		booth: 'V',
		registration: 2
	},
	{
		package: 'silver',
		price: 250,
		programBook: '1/4 page',
		onlineMedia: 'V',
		slideShow: 'V',
		booth: '',
		registration: 1
	},
	{
		package: 'bronze',
		price: 100,
		programBook: 'logo',
		onlineMedia: 'V',
		slideShow: '',
		booth: '',
		registration: 0
	},
	{
		package: 'booth-only',
		price: 350,
		programBook: '',
		onlineMedia: '',
		slideShow: '',
		booth: 'V',
		registration: 1
	}
];
export class SponsorTableDataSource extends DataSource<any> {
	/** Connect function called by the table to retrieve one stream containing the data to render. */
	connect(): Observable<Element[]> {
		return Observable.of(data);
	}

	disconnect() { }
}
