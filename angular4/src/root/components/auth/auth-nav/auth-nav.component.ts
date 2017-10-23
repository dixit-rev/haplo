import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from "@angular/core";

@Component({
	selector: 'auth-nav',
	templateUrl: './auth-nav.html',
	styleUrls: ['./auth-nav.scss']
})
export class AuthNavComponent implements OnChanges {
	@Input() formType: string;
	@Output() onFormChange = new EventEmitter();

	change: any;

	ngOnChanges(changes: SimpleChanges) {
		for (let change in changes) {
			if (changes.hasOwnProperty(change)) {
				let parent = changes[change];
				this.change = Object.assign({}, parent.currentValue);
			}
		}
	}

	changeForm(formType, submitType) {
		this.onFormChange.emit({
			formType: formType,
			submitType: submitType
		});
	}
}