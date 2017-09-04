import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { WebsiteComponent } from './website.component';
import { WebsiteService } from './website.service';
import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteHeaderComponent } from './website-header/website-header.component';
import { WebsiteTalkComponent } from './website-talk/website-talk.component';
import { WebsiteTalkSpeakerComponent } from './website-talk/website-talk-speaker/website-talk-speaker.component';



@NgModule({
  imports: [ SharedModule, WebsiteRoutingModule ],
  declarations: [ WebsiteComponent, WebsiteHeaderComponent, WebsiteTalkComponent, WebsiteTalkSpeakerComponent ],
  providers: [ WebsiteService ]
})
export class WebsiteModule { }
