import { NgModule } from "@angular/core";

import { AuthModule } from "./auth/auth.module";
import { FeedModule } from "./feed/feed.module";
import { HomeModule } from "./home/home.module";
import { MessageModule } from "./message/message.module";
import { PostModule } from "./post/post.module";
import { SuggestModule } from "./suggest/suggest.module";
import { TrendingModule } from "./trending/trending.module";

import { UserModule } from "./user/user.module";

@NgModule({
	imports: [
		FeedModule,
		HomeModule,
		MessageModule,
		PostModule,
		SuggestModule,
		TrendingModule,
		AuthModule,
		UserModule
	],
	declarations: [
	],
	providers: [],
	exports: [
		FeedModule,
		HomeModule,
		MessageModule,
		PostModule,
		SuggestModule,
		TrendingModule,
		AuthModule,
		UserModule
	]
})
export class ComponentsModule {
	
}