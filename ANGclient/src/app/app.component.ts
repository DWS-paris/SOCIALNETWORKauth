import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main class="container">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
})
export class AppComponent implements OnInit { 

  ngOnInit(): void { }
}
