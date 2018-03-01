/*
Import des composants du service
*/
  // Import des interfaces
  import { Injectable } from '@angular/core';
  import { Http, Response } from '@angular/http';
  import { Headers } from '@angular/http';
  import 'rxjs/add/operator/toPromise';

  // Import des modules
  import { UserModel } from '../../models/user.model';
// 

/*
Définition et export du service
*/
  @Injectable()
  export class AuthService {

    // Créer une variable pour l'adresse de l'API
    private apiUrl: string = '/auth';

    constructor(
      // Injecter une variable de type Http dans le service
      private http: Http
    ) {};

    
    // Fonction Facebook Connect
    public facebookConnect(): Promise<any>{
      let myHeader = new Headers();
      myHeader.append('Content-Type', 'application/json');
      return this.http.get(`${this.apiUrl}/facebook`, { headers: myHeader }).toPromise().then(this.getData).catch(this.handleError);
    };
    

    /*
    Fonctions de traitement des Promises
    */
      // Créer une fonction pour traiter le retour de l'API
      private getData(res: Response){
        return res.json() || {};
      };

      // Créer une fonction pour traiter les erreurs de requête
      private handleError(err: any){
        return Promise.reject(err);
      };
    // 
  };
// 