import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
	selector: '[passwordReveal]',
	styleUrls: ['password-reveal.scss']
})
export class PasswordRevealDirective {
	passwordInput: any;
	inputNextSibling: any;
	inputParent: any;
	passwordReveal: any;
	revealIcon: any;

	constructor(private el: ElementRef) {
		this.passwordInput = el.nativeElement;
		this.inputNextSibling = this.passwordInput.nextSibling;
		this.inputParent = this.passwordInput.parentNode,
		this.passwordReveal = document.createElement('a'),
		this.revealIcon = document.createElement('i');

		this.revealIcon.className = 'glyphicon glyphicon-eye-open';
		this.passwordReveal.className = 'password-reveal';
		this.passwordReveal.appendChild(this.revealIcon);
		this.inputParent.insertBefore(this.passwordReveal, this.inputNextSibling);

	}

	toggleReveal() {
		if (this.passwordInput.value.length) {
			if (this.passwordInput.type === 'password') {
				this.passwordInput.type = 'text';
			} else {
				this.passwordInput.type = 'password';
			}
        }
	}

	@HostListener('click') revealClick(event) {
		event.preventDefault();
		event.stopPropagation();
		this.toggleReveal();
	}
}