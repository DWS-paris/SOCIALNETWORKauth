/*
Configuration du composants
*/
  // Import des interfaces
  import { Component, OnInit } from '@angular/core';

  // Modules
  import { UserService } from '../../services/user/user.service';
  import { FeedService } from '../../services/feed/feed.service';
  import { UserModel } from '../../models/user.model';
  import { LoaderStateModel } from '../../models/loader.state.model';

  // Définition du composant
  @Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    providers: [ UserService, FeedService ],
  })
// 



/*
Export du composant
*/
  export class DashboardComponent implements OnInit {

    // Loader
    public loaderState: LoaderStateModel = { path: `/dashboard`, isClose: true };

    // Variables
    public singleUser: UserModel;
    public activeView: string = `/dashboard`;

    constructor(
      private userService: UserService,
      private feedService: FeedService
    ) { }

    // Fonction Change View
    public changeView = (evt: any) => {
      this.loaderState = evt;
    };

    // Fonction User Info
    private getUserInfos = () => {
      this.userService.getUserInfo(localStorage.getItem('MEANSOCIALtoken'))
        .then( data => { // Success getUserInfo()

          // Masquer le loader
          this.loaderState.isClose = true;

          // Définition de l'objet singleUser
          this.singleUser = data;
        })
        
        .catch( err  => { // Error getUserInfo()
          // Introduction
          this.loaderState.isClose = false;
          console.error(err)
        })
    };

    // Fonction User Feed
    private getUserFeed = () => {
      this.feedService.getFeeds(localStorage.getItem('MEANSOCIALtoken'))
        .then( data => { // Success getUserFeed()
          console.log(data)
        })
        
        .catch( err  => { // Error getUserFeed()
          console.error(err)
        })
    }


    // Fonction Add New Feed
    public addNewFeed = (evt) => {
      console.log(evt)

      this.feedService.addNewFeed( evt, localStorage.getItem('MEANSOCIALtoken'))
        .then( data => { // Success getUserFeed()
          console.log(data)
        })
        
        .catch( err  => { // Error getUserFeed()
          console.error(err)
        })
    }

    ngOnInit() {
      // Récupérer les informations utilisateur
      this.getUserInfos();

      // Récupérer la liste des feeds
      this.getUserFeed();
    };

  }
// 