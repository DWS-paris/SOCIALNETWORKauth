/*
Configuration du composants
*/
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import { FeedFormComponent } from './feed-form.component';

  // Configuration du module
  @NgModule({
    declarations: [
      FeedFormComponent,
    ],
    imports: [ CommonModule, FormsModule ],
    exports: [
      FeedFormComponent
    ]
  })
//

/*
Export de la class du module
*/
  export class FeedFormModule {}
//