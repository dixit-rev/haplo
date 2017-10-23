import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthAPI } from './auth.constant';
import { Observable } from 'rxjs/Rx';
import { SharedService } from '../../shared/services/shared.service';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
	errorMap: any;
	storage: any;

	constructor(private http: Http,
				private sharedService: SharedService) {
		this.errorMap = {
			signUp: {
		        '001': 'The email you entered is taken.',
		        '002': 'The username you entered is taken.',
		        '003': 'The phone number you entered is already registered.',
		        '004': 'Your information has already been registered.'
			},
			login: {
				'001': 'The username or password you entered is incorrect.',
				'002': 'Your account has not been verified.',
				'003': 'Your account has been banned.'
			},
			'401': 'The reset code you provided is invalid.',
			'503': 'There was an error changing your password. Please try again.',
			fallback: 'An error occured processing your request. Please try again.',
			verify: 'There was an error verifying your account. Please try again.'
		};
		this.storage = localStorage.getItem('uSTADIUM');
	}

	checkValidity(token): any {
		let payload = token.split('.')[1];
		payload = window.atob(payload);
		payload = JSON.parse(payload);

		token = this.isExpired(payload) ? this.logOut() : token;
		return token;
	}

	errorHandler(error, formType) {
		let errorMessage, errorType;

		error = error.data.code || error.status;

		if (this.errorMap.hasOwnProperty(formType)) {
			errorType = this.errorMap[formType];
			if (errorType.hasOwnProperty(error)) {
				errorMessage = errorType[error];
			} else {
				errorMessage = this.errorMap[error] || this.errorMap['fallback'];
			}
		} else {
			errorMessage = this.errorMap[error] || this.errorMap['fallback'];
		}

		return errorMessage;
	}

	forgotPassword(user) {
		if (user.email) {
			user.email = user.email.toLowerCase();
		}
		return this.http.post(AuthAPI.forgotPassword, user)
			.map((res: Response) => res);
	}

	getJWT() {
		let token = this.storage.token || null;
		let validToken;

		validToken = token ? this.checkValidity(token) : null;
		return validToken;
	}

	isExpired(payload) {
		return Date.now() / 10000 > payload.exp;
	}

	login(user) {
		return this.http.post(AuthAPI.logIn, user)
			.map((res: Response) => {
				this.setCredentials(res.json().data.data.token);
				return res;
			});
	}

	logOut() {
		delete this.storage.token;
		this.sharedService.broadcast({user_state_change:  null});
	    // return null to indicate token no longer exists
	    return null;
	}

	resetPassword(user) {
		return this.http.post(AuthAPI.resetPassword, user)
			.map((res: Response) => {
				this.setCredentials(res.json().data.data.token);
				return res;
			});
	}

	successHandler() {
		var success = 'Success! You should receive a verification code shortly.';
		return success;
	}

	setCredentials(token) {
		this.storage.token = token;
		this.sharedService.broadcast({user_state_change:  true});
	}

	signUp(user) {
		// api requires email parameter to be all lowercase
		user.email = user.email.toLowerCase();
		return this.http.post(AuthAPI.signUp, user)
		  .map((res: Response) => res);

	}

	verify(user) {
		// api requires email parameter to be all lowercase
		user.email = user.email.toLowerCase();
		return this.http.post(AuthAPI.verify, user)
			.map((res: Response) => {
				this.setCredentials(res.json().data.token);
			});
	}
}