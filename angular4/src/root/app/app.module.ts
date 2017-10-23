import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';  

import { ComponentsModule } from '../components/components.module';

import { AppHeaderComponent } from "./app-header/app-header.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { AppComponent } from "./app.component";

import { AppService } from "./app.service";

@NgModule({
	imports: [
		CommonModule,
		ComponentsModule
	],
	declarations: [
		AppHeaderComponent,
		AppFooterComponent,
		AppComponent
	],
	providers: [ AppService ]
})
export class AppModule {
	
}