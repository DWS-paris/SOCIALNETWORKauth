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
  export class UserService {

    constructor( private http: Http ) {};

    private apiUrl: string = '/user'

    // Créer une fonction pour connecter l'utilistateur
    public userFacebooConnect(userData: UserModel): Promise<any>{
      // Définition du header de la requête
      let myHeader = new Headers();
      myHeader.append('Content-Type', 'application/json');

      console.log(userData)

      return this.http.post(`${this.apiUrl}/login`, userData, { headers: myHeader }).toPromise().then(this.getData).catch(this.handleError);
    };


    /*
    Fonctions de traitement de Promises
    */
      // Traiter le retour de l'API
      private getData(res: Response){
        return res.json() || {};
      };

      // Traiter les erreurs de requête
      private handleError(err: any){
        return Promise.reject(err);
      };
    //
  };
// 