import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Routing } from './app.routes'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
