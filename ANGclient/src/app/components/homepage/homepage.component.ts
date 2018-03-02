/*
Configuration du composants
*/
  // Import des interfaces
  import { Component, OnInit } from '@angular/core';
  import { FacebookService, LoginOptions, AuthResponse, LoginResponse, InitParams } from 'ngx-facebook';
  
  // Import des modules
  import { AuthService } from '../../services/auth/auth.service';
  import { UserModel } from '../../models/user.model';

  // Définition du composant
  @Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    providers: [ AuthService ]
  })
//



/*
Export du composant
*/
  export class HomepageComponent implements OnInit {

    // Initialisation de l'objet utilisateur
    private userObject : UserModel = {
      name: null,
      email: null,
      password: null,
      gender: null,
      type: null,
      facebook: {
        token: null,
        id: null
      }
    }

    constructor( private myService: AuthService, private fb: FacebookService) {
      // Cnfiguration du module Facebook
      const initParams: InitParams = {
        appId: '183483015710927',
        xfbml: true,
        version: 'v2.8'
      };
      
      // Initialisation du module Facebook
      fb.init(initParams);       
    }

    // Connecter l'utilisateur à Facebook
    public submitFacebookConnect = () => {
      
      // Connecter l'utilisateur à Facebook
      this.fb.login()
      // Tester le requête
      .catch((error: any) => {
        console.error(error)
      })

      // Traitement du success
      .then((response: LoginResponse) =>{
        // Définition des données Facebook utilisateur
        this.userObject.facebook.token = response.authResponse.accessToken;
        this.userObject.facebook.id = response.authResponse.userID;

        // Récupérer les information utilisateur 
        this.fb.api('me?fields=id,name,birthday,email, gender')
        // Tester le requête
        .catch((error: any) => {
          console.error(error)
        })
        // Traitement du success
        .then( response => {
          // Définition des données Personnelles utilisateur
          this.userObject.name = response.name
          this.userObject.email = response.email
          this.userObject.gender = response.gender
          this.userObject.password = this.userObject.facebook.id
          this.userObject.type = `userFB`
        })
        // Vérification des données utilisateur
        .then( () => {
          console.log(this.userObject)
        } )
      })
    }

    ngOnInit() {}

  }
//