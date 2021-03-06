import { Observable, Observer } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
	observable: Observable<any>;
	observer: Observer<any>;

	constructor() {
		this.observable = Observable.create((observer: Observer<any>) => {
			this.observer = observer;
		}).share();
	}

	broadcast(event) {
		this.observer.next(event);
	}

	on(eventName, callback) {
		this.observable.filter((event) => {
			return event.name === eventName;
		}).subscribe(callback);
	}
}