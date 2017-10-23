import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
	selector: 'welcome',
	templateUrl: './welcome.html',
	styleUrls: ['./welcome.scss']
})
export class WelcomeComponent implements OnInit {
	fail: any;
	formType: string;
	submitType: string;
	success: string;
	user: any;

	constructor(private authService: AuthService) {

	}

	ngOnInit(): void {
		this.fail = '';
		this.formType = 'login';
		this.submitType = 'login';
		this.success = '';
		this.user = {};
	}

	authUser(event) {
		debugger;
		let auth = this.authService[this.formType],
			user = Object.assign({}, event.user);

		auth.bind(this.authService)(user).subscribe(
			res => {
				this.setRequestStatus(null, null);
			},
			err => {
				this.setRequestStatus(err.json(), this.formType);
			}
		);
	}

	setFormType(event) {
		this.formType = Object.assign({}, event.formType);
		this.submitType = Object.assign({}, event.submitType);
	}

	resetComponentState() {
		this.fail = '';
		this.success = '';
		this.user = {};
	}

	setRequestStatus(error, formType) {
		this.success = '';
		this.fail = '';

		if (error) {
			this.fail = this.authService.errorHandler(error, formType);
		} else {
			this.success = this.authService.successHandler();
		}
	}
}