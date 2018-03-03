/*
Configuration du composants
*/
  // Import des interfaces
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  import { FeedModel } from '../../models/feed.model';
  import { UserModel } from '../../models/user.model';

  // Définition du composant
  @Component({
    selector: 'app-feed-form',
    templateUrl: './feed-form.component.html'
  })
// 



/*
Export du composant
*/
  export class FeedFormComponent implements OnInit {

    public newFeedObject: FeedModel;
    @Output() sendFeedData = new EventEmitter;
    @Input() singleUser: UserModel;

    constructor() { }

    // Fonction Add Feed
    public addNewFeed = () => {
      if(this.newFeedObject.content === null || this.newFeedObject.content.length === 0){

      } else{
        this.sendFeedData.emit(this.newFeedObject)
      }
    }

    ngOnInit() {
      // Configuration de l'objet newFeedObject
      this.newFeedObject = {
        content: null,
        author: {
          _id: this.singleUser._id,
          name: this.singleUser.name
        }
      };

     }

  }
//