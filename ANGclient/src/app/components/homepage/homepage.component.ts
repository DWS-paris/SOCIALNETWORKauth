/*
Configuration du composants
*/
  // Import des interfaces
  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { FacebookService, LoginOptions, AuthResponse, LoginResponse, InitParams } from 'ngx-facebook';
  
  // Import des modules
  import { UserService } from '../../services/user/user.service';
  import { UserModel } from '../../models/user.model';
  import { UserLoginModel } from '../../models/user.login';
  import { LoginFormModel } from '../../models/login.form';

  // Définition du composant
  @Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    providers: [ UserService ]
  })
//



/*
Export du composant
*/
  export class HomepageComponent implements OnInit {

    // Variables : Loader
    public loaderIsClose: boolean = true;
    public loaderIsRight: boolean = false;

    // Variables : Login
    public userLoginObject: UserLoginModel = { 
      email: null, 
      password: null 
    };

    public errorMsg: LoginFormModel = { 
      errors: 0, 
      email: false, 
      password: false, 
      invalidUser: false, 
      invalidPassword: 
      false 
    };

    // Initialisation de l'objet utilisateur
    private userObject : UserModel = {
      name: null,
      email: null,
      password: null,
      gender: null,
      type: null,
      facebook: {
        token: null,
        id: null,
        avatar: null
      }
    }

    constructor( 
      private userService: UserService, 
      private facebookService: FacebookService, 
      private router: Router) 
    {
      // Configuration du module Facebook
      const initParams: InitParams = {
        appId: '183483015710927',
        xfbml: true,
        version: 'v2.8'
      };
      
      // Initialisation du module Facebook
      facebookService.init(initParams);       
    }

    // Connecter l'utilisateur à Facebook
    public submitFacebookConnect = () => {
      
      // Connecter l'utilisateur sur Facebook
      this.facebookService.login()

        // Capter le success de la requête : Facebook Login
        .then((response: LoginResponse) =>{
          // Définition des données Facebook utilisateur
          this.userObject.facebook.token = response.authResponse.accessToken;
          this.userObject.facebook.id = response.authResponse.userID;

          // Récupérer les informations utilisateur sur Facebook
          this.facebookService.api('me?fields=id,name,birthday,email, gender, picture')
            // Capter le success de la requête : Facebook API
            .then( response => {
              // Définition des données Personnelles utilisateur
              this.userObject.facebook.avatar = response.picture.data.url;
              this.userObject.name = response.name
              this.userObject.email = response.email
              this.userObject.gender = response.gender
              this.userObject.password = this.userObject.facebook.id
              this.userObject.type = `userFB`;

              // Afficher le loader
              this.loaderIsClose = true;

              // Appeler la fonction du service pour connecter l'utilisateur
              this.userService.userFacebooConnect(this.userObject)
                // Success : utilisateur connecté
                .then( data => {
                  // Enregistrement du token
                  localStorage.setItem('MEANSOCIALtoken', data.content.token);

                  // Navigation
                  window.setTimeout(()=>{
                    this.router.navigateByUrl(`/dashboard`);
                  }, 300);

                })
                // Error : problème serveur
                .catch( err  => {
                  console.error(err)
                })
            })

            // Capter les érreurs de requête : Facebook API
            .catch((error: any) => {
              console.error(error)
            })
      })

      // Capter les érreurs de requête : Facebook Login
      .catch((error: any) => {
        console.error(error)
      })
    }

    // Function User Login
    public submitLogUser = () => {
      // Vider les erreurs
      this.errorMsg.errors = 0;

      // Vérification des informations saisies
      if( this.userLoginObject.email == null || this.userLoginObject.email.length == 0){
        // Email manquant
        this.errorMsg.email = true;
        this.errorMsg.errors++;
      }
      
      if( this.userLoginObject.password == null || this.userLoginObject.password.length == 0){
        // Password manquant
        this.errorMsg.password = true;
        this.errorMsg.errors++;
      }
      
      if(this.errorMsg.errors === 0){ 
        // => Formulaire validé
        // Afficher le loader
        this.loaderIsClose = true;

        this.userService.userLogin(this.userLoginObject).then(user => {
          // Enregistrement du token
          localStorage.setItem('DWStoken', user.token);

          // Navigation
          window.setTimeout(()=>{
            this.router.navigateByUrl(`/dashboard`);
          }, 300);
          
        }).catch(error => {
          if(error.status === 404){
            // Utilisateur inconnu
            this.errorMsg.invalidUser = true;

          } else if(error.status === 401){
            // Mot de passe invalide
            this.errorMsg.invalidPassword = true;

          }
        })
      }
    }

    ngOnInit() {
      // Introduction
      window.setTimeout(()=>{
        this.loaderIsRight = true;
        window.setTimeout(()=>{
          this.loaderIsClose = false;
          this.loaderIsRight = false;
        }, 300);
      }, 1000);
    }

  }
//