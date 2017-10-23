import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FeedModule } from '../feed/feed.module';

@NgModule({
	imports: [
		FeedModule
	],
	declarations: [
		HomeComponent
	],
	exports: [
		HomeComponent
	]
})
export class HomeModule {
	
}