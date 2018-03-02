/*
Configuration du composants
*/
  // Import des interfaces
  import { Component, OnInit } from '@angular/core';
  import { UserService } from '../../services/user/user.service';

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

    constructor(private userService: UserService) { }

    ngOnInit() {

      // Récuopération des données utilisateur
      const userToken = localStorage.getItem('MEANSOCIALtoken');
      this.userService.getUserInfo(userToken)
      .then( data => {

        // Introduction
        window.setTimeout(()=>{
          this.loaderIsRight = true;
          window.setTimeout(()=>{
            this.loaderIsClose = false;
            this.loaderIsRight = false;
          }, 300);
        }, 300);

        console.log(data)
      })
      // Error : problème serveur
      .catch( err  => {
        // Introduction
        window.setTimeout(()=>{
          this.loaderIsRight = true;
        }, 300);
        
        console.error(err)
      })

    }

  }
// 