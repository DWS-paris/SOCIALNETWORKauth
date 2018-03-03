/*
Import des composants
*/
  // Class
  import { Component, OnInit, OnChanges, Input } from '@angular/core';
  import { Router } from '@angular/router';

  // Module

  // Déclaration du composant
  @Component({
    selector: 'app-loader',
    template: `
      <aside id="loader" [ngClass]="{ open: loaderIsOpen, right: loaderIsRight }"></aside>
    `
  })
// 

/*
Export de la class du composant
*/
  export class LoaderComponent implements OnInit, OnChanges {

    
    // Variables
    public loaderIsOpen: boolean;
    public loaderIsRight: boolean;
    @Input() loaderState;

    constructor( private router: Router ) { }

    // Fonction CHeck View State
    private checkState = () => {
      // Afficher le loader
      this.loaderIsOpen = true; 

      /*
      Vérification des vues
      */
        // Path /
        if( this.loaderState.path === `/` ){
          // Masquer le header
          window.setTimeout(() => {
            this.loaderIsOpen = false 
          }, 300)
        }

        // Path dashboard || profile
        if( this.loaderState.path === `/dashboard` || this.loaderState.path === `/profile`){
          // Changer de vue
          window.setTimeout(()=>{
            this.router.navigateByUrl(this.loaderState.path)

            // Masquer le header à l'ouverure
            if(this.loaderState.isClose === true){
              this.loaderIsOpen = false 
            }
          }, 150);
        
        }
      // 
    }

    // Fonction App Intro
    private appIntro = () => {
      // Afficher le loader
      this.loaderIsOpen = true;

      window.setTimeout(()=>{
        // Masquer le loader
        this.loaderIsOpen = false;
      }, 300)
    }

    ngOnInit() { }

    ngOnChanges(changes: any): void {
      // Vérifier l'état de la vue
      this.checkState()
    }

  }
// 