import { Directive, ElementRef, HostListener, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/platform-browser';

@Directive({
	selector: '[appScrollFix]'
})
export class ScrollFixDirective {
	elIsInserted;

	constructor(
		private el: ElementRef,
		// @Inject(DOCUMENT) private document: Document
	) {	}

	@HostListener('window:scroll', []) onPageScroll() {
		const fixEl = this.el.nativeElement;
		const fixElClone = fixEl.cloneNode(true);
		fixElClone.classList.add('fixed-top');
		// console.log(this.el);
		const fixElNextSib = fixEl.nextSibling.nextSibling;
		// console.log(fixElNextSib);

		if (this.isInView() && fixElNextSib.classList.contains('fixed-top')) {
			// if (this.elIsInserted) {
				// fixEl.parentNode.removeChild(this.el.nativeElement.parentNode.lastChild);
				// this.elIsInserted = null;

				fixElNextSib.classList.remove('fixed-top');
			// }
		}
		if (!this.isInView() && !fixElNextSib.classList.contains('fixed-top')) {
			// if (!this.elIsInserted) {
				// fixEl.parentNode.appendChild(fixElClone);
				// this.elIsInserted = fixElClone;

				fixElNextSib.classList.add('fixed-top');
			// }
		}
	}

	private isInView() {
		return this.el.nativeElement.offsetTop - window.pageYOffset >= 0;
	}

}
