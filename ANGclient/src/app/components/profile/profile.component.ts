/*
Configuration du composants
*/
  // Import des interfaces
  import { Component, OnInit } from '@angular/core';

  // Modules
  import { LoaderStateModel } from '../../models/loader.state.model';
  import { UserService } from '../../services/user/user.service';
  import { UserModel } from '../../models/user.model';

  // Définition du composant
  @Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    providers: [ UserService ]
  })
// 


/*
Export du composant
*/
  export class ProfileComponent implements OnInit {

    // Variables
    public loaderState: LoaderStateModel = { path: `/profile`, isClose: true }
    public activeView: string = `/profile`;
    public singleUser: UserModel;
    private userToken: string = localStorage.getItem('MEANSOCIALtoken');

    constructor(private userService: UserService) { }

    // Fonction Change View
    public changeView = (evt: any) => {
      this.loaderState = evt;
    }

    // Fonction User Update
    public userUpdate = () => {

      this.userService.updateUserInfo(this.singleUser, this.userToken)
      .then( data => {
        // Redéfinition de l'objet singleUser
        this.singleUser = data.content;
      })
      .catch( err => {
        console.error( err )
      } )
    };

    ngOnInit() {
      // Récupération des données utilisateur
      this.userService.getUserInfo(this.userToken)
      .then( data => { // Success getUserInfo()

        // Masquer le loader
        this.loaderState.isClose = true;

        // Définition de l'objet singleUser
        this.singleUser = data;

        console.log(this.singleUser)
      })
    }
  }
// 