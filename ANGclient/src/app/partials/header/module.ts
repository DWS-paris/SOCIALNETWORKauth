/*
HeaderModule
*/
  // Imports des Interfaces
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';

  // Imports des composants
  import { HeaderComponent } from './header.component';

  
  // Configuration du HeaderModule
  @NgModule({
    declarations: [
      HeaderComponent,
    ],
    imports: [ CommonModule ],
    exports: [
      HeaderComponent
    ]
  })
//

  
/*
Export de HeaderModule
*/
  export class HeaderModule {}
//