import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { AuthComponent } from './auth/auth.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthService } from './auth.service';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		SharedModule
	],
	declarations: [
		AuthComponent,
		WelcomeComponent
	],
	exports: [
		WelcomeComponent
	],
	providers: [
		AuthService
	]
})
export class AuthModule {

}