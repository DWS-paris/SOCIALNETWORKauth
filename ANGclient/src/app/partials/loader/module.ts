/*
Configuration du composants
*/
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { LoaderComponent } from './loader.component';

  // Configuration du module
  @NgModule({
    declarations: [
      LoaderComponent,
    ],
    imports: [ CommonModule ],
    exports: [
      LoaderComponent
    ]
  })
//

/*
Export de la class du module
*/
  export class LoaderModule {}
//