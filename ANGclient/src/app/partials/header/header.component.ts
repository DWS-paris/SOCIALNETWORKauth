/*
Configuration du composants
*/
  // Import des interfaces
  import { Component, OnInit, Output, EventEmitter } from '@angular/core';
  import { Router } from '@angular/router';

  // Définition du composant
  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
  })
// 


/*
Export du composant
*/
  export class HeaderComponent implements OnInit {

    // Evenement Change View
    @Output() changeView = new EventEmitter;

    constructor( private router: Router ) { }

    // Fonction Navigation transition
    public navTransition = (path: string) => {
      // Emettre l'événement
      this.changeView.emit({viewPath: path, loderIsClose: false})

      window.setTimeout(()=>{
        // Deconnexion
        if(path === `/`) { localStorage.removeItem(`MEANSOCIALtoken`) };
        
        // Changer la vue
        this.router.navigateByUrl(path);

      }, 300);
    }

    ngOnInit() {
    }

  }
// 