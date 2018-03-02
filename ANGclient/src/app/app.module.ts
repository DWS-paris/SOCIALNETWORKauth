import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { FacebookModule } from 'ngx-facebook';

import { AppComponent } from './app.component';
import { Routing } from './app.routes';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    FacebookModule.forRoot(), 
    Routing,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
