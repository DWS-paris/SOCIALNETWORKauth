/*
Import des composants
*/
  // Class
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  import { Router } from '@angular/router';

  // Module
  import { FeedModel } from '../../models/feed.model';

  // Déclaration du composant
  @Component({
    selector: 'app-single-feed',
    templateUrl: './single-feed.component.html'
  })
// 


/*
Export de la class du composant
*/
  export class SingleFeedComponent implements OnInit {

    constructor() {}

    // Variables du composant
    @Input() item: FeedModel
    @Output() deleteFeed = new EventEmitter;
    public singleFeed: FeedModel;

    // Fonction Submit Delete Feed
    public submitDeleteFeed = ( _id: string ) => {
      this.deleteFeed.emit(_id);
    }

    ngOnInit() {
      this.singleFeed = this.item;
      let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
      this.singleFeed.date = new Date(this.singleFeed.date).toLocaleTimeString('fr') + ' - ' + new Date(this.singleFeed.date).toLocaleDateString('fr')
    }

  }
// 