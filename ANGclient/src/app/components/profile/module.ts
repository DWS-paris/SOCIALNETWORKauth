/*
Configuration du composants
*/
  // Import des interfaces
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';

  // Importer les composants
  import { ProfileComponent } from './profile.component';
  import { LoaderModule } from '../../partials/loader/module';
  import { HeaderModule } from '../../partials/header/module';
  import { Routing } from './route';
//

/*
Définition et export du module
*/
  // Définition
  @NgModule({
    declarations: [ ProfileComponent ],
    imports: [ Routing, CommonModule, FormsModule, LoaderModule, HeaderModule ]
  })

  // Export
  export class ProfileModule { };
// 