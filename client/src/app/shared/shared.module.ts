import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	MdButtonModule,
	// MdCheckboxModule,
	// MdToolbarModule,
	// MdListModule,
	// MdChipsModule,
	MdTabsModule,
	// MdCardModule,
	MdDialogModule,
	// MdSlideToggleModule
	MdMenuModule,
	MdTableModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { ScrollFixDirective } from './scroll-fix.directive';

@NgModule({
	imports: [CommonModule],
	declarations: [ScrollFixDirective],
	exports: [
		CommonModule,
		MdButtonModule,
		// MdCheckboxModule,
		// MdToolbarModule,
		// MdListModule,
		// MdChipsModule,
		MdTabsModule,
		// MdCardModule,
		MdDialogModule,
		// MdSlideToggleModule,
		MdMenuModule,
		MdTableModule,
		FlexLayoutModule,
		AngularFontAwesomeModule,
		ScrollFixDirective
	]
})
export class SharedModule {
	constructor() {
	  }
}
