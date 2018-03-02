/*
Configuration du composants
*/
  // Import des interfaces
  import { Component, OnInit } from '@angular/core';

  // Modules
  import { UserService } from '../../services/user/user.service';
  import { UserModel } from '../../models/user.model';
  import { LoaderStateModel } from '../../models/loader.state.model';

  // Définition du composant
  @Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    providers: [ UserService ],
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

    constructor(private userService: UserService) { }

    // Fonction Change View
    public changeView = (evt: any) => {
      console.log('changeView', evt)
      this.loaderState = evt;
    }

    ngOnInit() {

      // Récupération du token utilisateur
      const userToken = localStorage.getItem('MEANSOCIALtoken');

      // Récupération des données utilisateur
      this.userService.getUserInfo(userToken)
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
    }

  }
// 