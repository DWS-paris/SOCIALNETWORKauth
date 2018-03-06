/*
DashboardModule
*/
  // Imports des Interfaces
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';

  // Importer les composants
  import { DashboardComponent } from './dashboard.component';
  import { HeaderModule } from '../../partials/header/module';
  import { LoaderModule } from '../../partials/loader/module';
  import { FeedFormModule } from '../../partials/feed-form/module';
  import { SingleFeedModule } from '../../partials/single-feed/module';
  
  import { Routing } from './route';

  
  // Configuration du DashboardModule
  @NgModule({
    declarations: [ DashboardComponent ],
    imports: [ Routing, CommonModule, FormsModule, HeaderModule, LoaderModule, FeedFormModule, SingleFeedModule ]
  })
//


/*
Export de DashboardModule
*/
  export class DashboardModule { };
// 