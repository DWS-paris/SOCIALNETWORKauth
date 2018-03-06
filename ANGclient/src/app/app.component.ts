/*
Configuration du composants
*/
  // Import des interfaces
  import { Component } from '@angular/core';

  // Définition du composant
  @Component({
    selector: 'app-root',
    template: `
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    `,
  })
//


/*
Export du composant
*/
  export class AppComponent{};
//
