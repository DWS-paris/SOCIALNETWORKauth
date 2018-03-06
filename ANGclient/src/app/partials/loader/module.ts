/*
LoaderModule
*/
  // Imports des Interfaces
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';

  // Imports des composants
  import { LoaderComponent } from './loader.component';

  
  // Configuration du LoaderModule
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
Export de LoaderModule
*/
  export class LoaderModule {}
//