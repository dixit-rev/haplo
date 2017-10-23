import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";
import { UserService } from "../components/user/user.service";

@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	user: any;
	loading: boolean;
	guest: boolean;
	copyrightDate: number;

	constructor(private appService: AppService,
				private userService: UserService) {
	}

	ngOnInit(): void {
		this.appService.initializeStorage();
		this.copyrightDate = new Date().getFullYear();
		this.guest = false;
		this.loading = true;
		this.user = false;

		this.getUser();
	}

	logout(event) {
		
	}

	getUser(): void {
		try {
			this.userService.getUser()
				.subscribe(user => {
					this.welcomeUser(user);
				});
		} catch (err) {
			this.welcomeGuest();
		}
	}

	welcomeGuest() {
		this.guest = true;
		this.loading = false;
		this.user = false;
	}

	welcomeUser(user) {
		this.guest = false;
		this.loading = false;
		this.user = user;
	}
}