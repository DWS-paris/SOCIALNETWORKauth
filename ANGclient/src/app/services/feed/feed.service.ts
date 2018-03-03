/*
Import des composants du service
*/
  // Import des interfaces
  import { Injectable } from '@angular/core';
  import { Http, Response } from '@angular/http';
  import { Headers } from '@angular/http';
  import 'rxjs/add/operator/toPromise';

  // Import des modules
  import { FeedModel } from '../../models/feed.model';
// 

/*
Définition et export du service
*/
  @Injectable()
  export class FeedService {

    constructor( private http: Http ) {};

    private apiUrl: string = '/feed'

    // Fonction Get All Feed
    public getFeeds( token: string ): Promise<FeedModel[]>{
      // Définition du header de la requête
      let myHeader = new Headers();
      myHeader.append('x-access-token', token);
      
      return this.http.get(`${this.apiUrl}/all`, { headers: myHeader }).toPromise().then(this.getData).catch(this.handleError);
    };

    // Fonction Add New Feed
    public addNewFeed( newFeed:FeedModel, token: string ): Promise<FeedModel>{
      // Définition du header de la requête
      let myHeader = new Headers();
      myHeader.append('x-access-token', token);
      
      return this.http.post(`${this.apiUrl}/add`, newFeed, { headers: myHeader }).toPromise().then(this.getData).catch(this.handleError);
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