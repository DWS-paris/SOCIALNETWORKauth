/*
Configuration du composants
*/
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { HeaderComponent } from './header.component';

  // Configuration du module
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
Export de la class du module
*/
  export class HeaderModule {}
//