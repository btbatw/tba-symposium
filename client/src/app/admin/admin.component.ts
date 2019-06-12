import { Component, OnInit } from '@angular/core';
import { Recipe } from 'hummus-recipe';
// const HummusRecipe = require('hummus-recipe');
@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		// const pdfDoc = new Recipe('new', '/output.pdf', {
		// 	version: 1.6,
		// 	author: 'John Doe',
		// 	title: 'Hummus Recipe',
		// 	subject: 'A brand new PDF'
		// });

		// pdfDoc
		// 	.createPage('letter-size')
		// 	.endPage()
		// 	.endPDF();
	}

}
