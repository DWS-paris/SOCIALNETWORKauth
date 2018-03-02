/*
Configuration du composants
*/
  import { NgModule } from '@angular/core';
  import { HeaderComponent } from './header.component'
// 

/*
Définition et export du module
*/
  // Définition
  @NgModule({
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ]
  })

  // Export
  export class HeaderModule { };
// 