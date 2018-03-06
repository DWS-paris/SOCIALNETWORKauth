/*
SingleFeedModule
*/
  // Imports des Interfaces
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';

  // Imports des composants
  import { SingleFeedComponent } from './single-feed.component';

  
  // Configuration du SingleFeedModule
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
Export de SingleFeedModule
*/
  export class SingleFeedModule {}
//