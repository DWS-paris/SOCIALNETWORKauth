/*
Configuration du composants
*/
  // Import des interfaces
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';

  // Importer les composants
  import { DashboardComponent } from './dashboard.component';
  import { Routing } from './route';
// 
/*
Définition et export du module
*/
  // Définition
  @NgModule({
    declarations: [ DashboardComponent ],
    imports: [ Routing, CommonModule, FormsModule ]
  })

  // Export
  export class DashboardModule { };
// 