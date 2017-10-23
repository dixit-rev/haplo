import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from "@angular/core";

@Component({
	selector: 'auth',
	templateUrl: './auth.html',
	styleUrls: ['./auth.scss']
})
export class AuthComponent implements OnChanges {
	@Input() fail: any;
	@Input() formType: string;
	@Input() submitType: any;
	@Input() success: any;
	@Input() user: any;
	@Output() onSubmit = new EventEmitter();

	change: any;

	submit(form) {
		this.onSubmit.emit({user: this.user});
		this.resetForm(form);
	}

	resetForm(form) {
		form.reset();
	}

	ngOnChanges(changes: SimpleChanges) {
		for (let change in changes) {
			if (changes.hasOwnProperty(change)) {
				let parent = changes[change];
				this.change = Object.assign({}, parent.currentValue);
			}
		}
	}
}