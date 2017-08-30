import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppComponent } from './app.component';
import { TestAdminComponent } from './test-admin/test-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    TestAdminComponent
  ],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	HttpModule,
	AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
