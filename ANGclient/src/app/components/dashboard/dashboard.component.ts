/*
Configuration du composants
*/
  // Import des interfaces
  import { Component, OnInit, Output, EventEmitter } from '@angular/core';

  // Modules
  import { UserService } from '../../services/user/user.service';
  import { UserModel } from '../../models/user.model';

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
    public hideLoader: boolean = false;
    public loaderIsClose: boolean = true;
    public loaderIsRight: boolean = false;

    // Variables
    public singleUser: UserModel;
    @Output() sendUserData = new EventEmitter;

    constructor(private userService: UserService) { }

    // Fonction Change View
    public changeView = (evt: boolean) => {
      this.hideLoader = evt;
    }

    ngOnInit() {

      // Récupération du token utilisateur
      const userToken = localStorage.getItem('MEANSOCIALtoken');

      // Récupération des données utilisateur
      this.userService.getUserInfo(userToken)
      .then( data => { // Success getUserInfo()

        // Masquer le loader
        this.hideLoader = true;

        // Définition de l'objet singleUser
        this.singleUser = data;
        this.sendUserData.emit(this.singleUser)
      })
      
      .catch( err  => { // Error getUserInfo()
        // Introduction
        this.hideLoader = false;
        
        console.error(err)
      })

    }

  }
// 