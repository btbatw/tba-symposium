import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { WebsiteModule } from './website/website.module';
import { AdminModule } from './admin/admin.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		WebsiteModule,
		AdminModule,
		AppRoutingModule,
		HttpModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
