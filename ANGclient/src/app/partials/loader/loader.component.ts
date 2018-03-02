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

    private checkState = () => {
      console.log(this.loaderState)
      this.loaderIsOpen = true; 

      if( this.loaderState.path === `/` ){
        window.setTimeout(()=>{
          this.loaderIsOpen = false 
        }, 300)
      }

      if( this.loaderState.path === `/dashboard` || this.loaderState.path === `/profile`){
        window.setTimeout(()=>{
          this.router.navigateByUrl(this.loaderState.path)

          if(this.loaderState.isClose === true){
            this.loaderIsOpen = false 
          }
        }, 300);
       
      }
    }

    private appIntro = () => {
      this.loaderIsOpen = true;
      window.setTimeout(()=>{
        this.loaderIsOpen = false;
      }, 300)
    }

    private viewTransition = ( path: string ) => {
      window.setTimeout(()=>{
        this.router.navigateByUrl(path);
      }, 300)
    }

    ngOnInit() {
      // this.checkState()
    }

    ngOnChanges(changes: any): void {
      this.checkState()
    }

  }
// 