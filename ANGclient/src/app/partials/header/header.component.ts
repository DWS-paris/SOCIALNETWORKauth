/*
Configuration du composants
*/
  // Import des interfaces
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    @Input() activeView;
    
    // Variables
    public activeNav = {
      dashboard: false,
      profile: false
    }

    constructor( private router: Router ) { }

    // Fonction Navigation transition
    public navTransition = (path: string) => {
      // Emettre l'événement
      this.changeView.emit({viewPath: path, loderIsClose: false})

      window.setTimeout(()=>{
        // Vérification du path
        if(path === `/`) { 
          localStorage.removeItem(`MEANSOCIALtoken`) 
        }
        
        // Changer la vue
        this.router.navigateByUrl(path);

      }, 100);
    }

    ngOnInit() {
      console.log(this.activeView)
      // Vérification de la vue active
      if( this.activeView === `/dashboard` ){
        this.activeNav.dashboard = true;

      } else if( this.activeView === `/profile` ){
        this.activeNav.profile = true;
      }
    }

  }
// 