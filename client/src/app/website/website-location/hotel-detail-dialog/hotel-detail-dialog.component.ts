import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';


@Component({
	selector: 'app-hotel-dteail-dialog',
	templateUrl: './hotel-detail-dialog.component.html',
	styleUrls: ['./hotel-detail-dialog.component.scss']
})
export class HotelDetailDialog {

	constructor( @Inject(MD_DIALOG_DATA) public data: any) { }

	goToLink(link) {
		window.open(link, '_blank');
	}

}
