import { Component } from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [
		trigger('fadeInOut', [
			state('in', style({ opacity: 1 })),
			transition('void => *', [
				style({ opacity: 0 }),
				animate(600)
			]),
			transition('* => void', [
				animate(200, style({ opacity: 0 }))
			])
		])
	]
})
export class AppComponent {
	title = 'app';
}
