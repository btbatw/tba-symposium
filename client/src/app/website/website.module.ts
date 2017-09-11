import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AgmCoreModule } from '@agm/core';

import { WebsiteComponent } from './website.component';
import { WebsiteService } from './website.service';
import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteHeaderComponent } from './website-header/website-header.component';
import { WebsiteTalkComponent } from './website-talk/website-talk.component';
import { WebsiteTalkSpeakerComponent } from './website-talk/website-talk-speaker/website-talk-speaker.component';
import { SpeakerDetailDialog } from './website-talk/website-talk-speaker/speaker-detail-dialog/speaker-detail-dialog.component';
import { WebsiteAboutComponent } from './website-about/website-about.component';
import { WebsiteAboutCarouselComponent } from './website-about/website-about-carousel/website-about-carousel.component';
import { WebsiteLocationComponent } from './website-location/website-location.component';
import { WebsiteElevatorTalkComponent } from './website-elevator-talk/website-elevator-talk.component';



@NgModule({
	imports: [SharedModule, WebsiteRoutingModule, AgmCoreModule.forRoot({ apiKey: 'AIzaSyALqtOO3Dgdao-2ISlW1auWqzkzIABjwoM' })],
	declarations: [
		WebsiteComponent,
		WebsiteHeaderComponent,
		WebsiteTalkComponent,
		WebsiteTalkSpeakerComponent,
		SpeakerDetailDialog,
		WebsiteAboutComponent,
		WebsiteAboutCarouselComponent,
		WebsiteLocationComponent,
		WebsiteElevatorTalkComponent
	],
	providers: [WebsiteService],
	entryComponents: [SpeakerDetailDialog]
})
export class WebsiteModule { }
