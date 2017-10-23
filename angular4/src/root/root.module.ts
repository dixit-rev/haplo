import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { AppModule } from './app/app.module';
import { AppRoutingModule } from './app/app-routing.module';
// import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppModule,
    AppRoutingModule
    // ComponentsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { 
}
