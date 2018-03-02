/*
Configuration du composants
*/
  // Import des interfaces
  import { Component, OnInit } from '@angular/core';

  // Modules
  import { UserService } from '../../services/user/user.service';
  import { UserModel } from '../../models/user.model';

  // Définition du composant
  @Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    providers: [ UserService ]
  })
// 



/*
Export du composant
*/
  export class DashboardComponent implements OnInit {

    // Loader
    public loaderIsClose: boolean = true;
    public loaderIsRight: boolean = false;

    // VAriables
    public singleUSer: UserModel;

    constructor(private userService: UserService) { }

    ngOnInit() {

      // Récupération du token utilisateur
      const userToken = localStorage.getItem('MEANSOCIALtoken');

      // Récupération des données utilisateur
      this.userService.getUserInfo(userToken)
      .then( data => { // Success getUserInfo()

        // Introduction
        window.setTimeout(()=>{
          this.loaderIsRight = true;
          window.setTimeout(()=>{
            this.loaderIsClose = false;
            this.loaderIsRight = false;
          }, 300);
        }, 300);

        // Définition de l'objet singleUSer
        this.singleUSer = data;
      })
      
      .catch( err  => { // Error getUserInfo()
        // Introduction
        window.setTimeout(()=>{
          this.loaderIsRight = true;
        }, 300);
        
        console.error(err)
      })

    }

  }
// 