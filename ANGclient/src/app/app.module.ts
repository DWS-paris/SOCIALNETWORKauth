import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { FacebookModule } from 'ngx-facebook';

import { AppComponent } from './app.component';
import { Routing } from './app.routes'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule,FacebookModule.forRoot(), Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
