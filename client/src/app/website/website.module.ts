import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { WebsiteComponent } from './website.component';
import { WebsiteService } from './website.service';
import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteHeaderComponent } from './website-header/website-header.component';
import { WebsiteTalkComponent } from './website-talk/website-talk.component';
import { WebsiteTalkSpeakerComponent } from './website-talk/website-talk-speaker/website-talk-speaker.component';
import { WebsiteAboutComponent } from './website-about/website-about.component';
import { WebsiteAboutCarouselComponent } from './website-about/website-about-carousel/website-about-carousel.component';



@NgModule({
  imports: [ SharedModule, WebsiteRoutingModule ],
  declarations: [ WebsiteComponent, WebsiteHeaderComponent, WebsiteTalkComponent, WebsiteTalkSpeakerComponent, WebsiteAboutComponent, WebsiteAboutCarouselComponent ],
  providers: [ WebsiteService ]
})
export class WebsiteModule { }
