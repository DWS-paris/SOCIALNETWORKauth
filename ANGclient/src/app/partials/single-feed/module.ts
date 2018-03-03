/*
Configuration du composants
*/
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SingleFeedComponent } from './single-feed.component';

  // Configuration du module
  @NgModule({
    declarations: [
      SingleFeedComponent,
    ],
    imports: [ CommonModule ],
    exports: [
      SingleFeedComponent
    ]
  })
//

/*
Export de la class du module
*/
  export class SingleFeedModule {}
//