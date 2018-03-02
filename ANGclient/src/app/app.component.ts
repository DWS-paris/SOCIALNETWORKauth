import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <router-outlet></router-outlet>
    
    <app-footer></app-footer>
  `,
})
export class AppComponent implements OnInit { 

  ngOnInit(): void { }
}
