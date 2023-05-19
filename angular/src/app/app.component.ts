import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <h1>Hi, please enter your name:</h1>
      <p>First: <input [(ngModel)]="firstName" /></p>
      <p>Last: <input [(ngModel)]="lastName" /></p>
      <p>{{ firstName }} {{ lastName }}</p>
      <p><button (click)="reset()">Reset</button></p>
    </main>
  `,
  imports: [
    FormsModule
  ]
})
export class AppComponent {
  firstName = '';
  lastName = '';

  reset() {
    this.firstName = '';
    this.lastName = '';
  }
}
