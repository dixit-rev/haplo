import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
	initializeStorage(): void {
		if (!localStorage.hasOwnProperty('uSTADIUM')) {
			localStorage.uSTADIUM = {};
		}
	}
}