import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header [ngClass]="{open: isOpen}"></app-header>
    <main class="container">
      <router-outlet (sendUserData)='onDeactivate($event)'></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
})
export class AppComponent implements OnInit { 
  
  public isOpen:boolean = false

  onDeactivate(evt){
    console.log('onActivate', evt)
  }

  ngOnInit(): void {
    window.setTimeout(()=>{
      this.isOpen = true
    }, 500);
  }
}
