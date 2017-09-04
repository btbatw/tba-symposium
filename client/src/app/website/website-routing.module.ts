import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WebsiteComponent } from './website.component';

@NgModule({
  imports: [
    RouterModule.forChild([
		{ path: 'website', component: WebsiteComponent },
	]),
  ],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
