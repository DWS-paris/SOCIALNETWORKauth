/*
Configuration du composants
*/
  // Import des interfaces
  import { Component, OnInit } from '@angular/core';
  // Import des modules
  import { AuthService } from '../../services/auth/auth.service';

  import { FacebookService, LoginOptions, AuthResponse, LoginResponse, InitParams } from 'ngx-facebook';


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

    constructor( private myService: AuthService, private fb: FacebookService ) {
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
      
      this.fb.login()
      .then((response: LoginResponse) =>{
         console.log(response)
         this.fb.api('me?fields=id,name,birthday,email')
         .then( reponse => {
           console.log(reponse)
         })
         .catch( err => {
          console.error(err)
        })

      })
      .catch((error: any) => console.error(error));
    }

    ngOnInit() {
      
    }

  }
//