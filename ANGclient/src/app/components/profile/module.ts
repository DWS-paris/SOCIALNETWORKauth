/*
ProfileModule
*/
  // Imports des Interfaces
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';

  // Importer les composants
  import { ProfileComponent } from './profile.component';
  import { LoaderModule } from '../../partials/loader/module';
  import { HeaderModule } from '../../partials/header/module';
  import { Routing } from './route';


  // Configuration du ProfileModule
    @NgModule({
    declarations: [ ProfileComponent ],
    imports: [ Routing, CommonModule, FormsModule, LoaderModule, HeaderModule ]
  })
// 

  
/*
Export de ProfileModule
*/
  export class ProfileModule { };
// 