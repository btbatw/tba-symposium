import { Component, OnInit, OnDestroy } from '@angular/core';

import {
	trigger,
	style,
	animate,
	transition,
	group
} from '@angular/animations';

@Component({
	selector: 'app-website-about-carousel',
	templateUrl: './website-about-carousel.component.html',
	styleUrls: ['./website-about-carousel.component.scss'],
	animations: [
		trigger('itemAnim', [
			transition(':enter', [
				style({ transform: 'translateX(-100%)' }),
				animate('2s ease')
			]),
			transition(':leave', [
				group([
					animate('2s ease', style({
						transform: 'translate(100%)'
					})),
					animate(0, style({
						position: 'absolute',
						top: '-5%'
					}))
				])
			])
		]),
	]
})
export class WebsiteAboutCarouselComponent implements OnInit, OnDestroy {
	carouselImgs = ['01', '02', '03', '04', '06', '07'];
	showingImg = this.carouselImgs[0];
	starting = this.carouselImgs.length;
	isPlaying;

	constructor() { }

	ngOnInit() {
		setTimeout(() => this.play(), 6000);
	}

	play() {
		this.starting += 1;
		return this.isPlaying = setInterval(() => {
			this.starting += 1;
		}, 4000);
	}

	pause() {
		if (this.isPlaying) {
			clearInterval(this.isPlaying);
			this.isPlaying = null;
		}
	}

	ngOnDestroy() {
		this.pause();
	}

	togglePlay() {
		return this.isPlaying ? this.pause() : this.play();
	}
}
