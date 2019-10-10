import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-root">
      <app-navbar></app-navbar>
      <div class="container mt-4">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {}
