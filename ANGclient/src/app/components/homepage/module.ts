/*
HomepageModule
*/
  // Imports des Interfaces
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';

  // Importer les composants
  import { HomepageComponent } from './homepage.component';
  import { LoaderModule } from '../../partials/loader/module';
  import { Routing } from './route';

  
  // Configuration du HomepageModule
  @NgModule({
    declarations: [ HomepageComponent ],
    imports: [ Routing, CommonModule, FormsModule, LoaderModule ]
  })


  
/*
Export de HomepageModule
*/
  export class HomepageModule { };
// 