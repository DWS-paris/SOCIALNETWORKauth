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
    public loaderIsClose: boolean = true;
    public loaderIsRight: boolean = false;

    // Variables
    public singleUser: UserModel;
    @Output() sendUserData = new EventEmitter;

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

        // Définition de l'objet singleUser
        this.singleUser = data;
        this.sendUserData.emit(this.singleUser)
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