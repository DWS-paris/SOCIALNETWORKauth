/*
AppModule
*/
  // Imports des Interfaces
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { HttpModule } from '@angular/http';
  import { FacebookModule } from 'ngx-facebook';

  // Import des composants
  import { AppComponent } from './app.component';
  import { Routing } from './app.routes';
  import { FooterComponent } from './partials/footer/footer.component';


  // Configuration du AppModule
  @NgModule({
    declarations: [
      AppComponent,
      FooterComponent
    ],
    imports: [
      BrowserModule, 
      HttpModule,
      FacebookModule.forRoot(), 
      Routing
    ],
    providers: [],
    bootstrap: [ AppComponent ]
  })
// 


/*
Export de AppModule
*/
  export class AppModule { }
// 