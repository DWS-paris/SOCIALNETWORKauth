/*
Import des composants
*/
  // Class
  import { Component, OnInit, OnChanges, Input } from '@angular/core';

  // Module

  // Déclaration du composant
  @Component({
    selector: 'app-loader',
    template: `
      <aside id="loader" [ngClass]="{ open: loaderIsClose, right: loaderIsRight }"></aside>
    `
  })
// 

/*
Export de la class du composant
*/
  export class LoaderComponent implements OnInit, OnChanges {

    
    // Variables
    public loaderIsClose: boolean;
    public loaderIsRight: boolean;
    @Input() hideLoader;

    constructor() { }

    ngOnInit() {
      this.loaderIsClose = true;
      this.loaderIsRight = false;
    }

    ngOnChanges(changes: any): void {
      
      if(this.hideLoader){
        this.loaderIsClose = false;
        this.loaderIsRight = true;

      } else{
        this.loaderIsClose = true;
        this.loaderIsRight = false;
      }
    }

  }
// 