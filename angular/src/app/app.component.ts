import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main [formGroup]="form">
      <h1>Hi, please enter your name:</h1>
      <p>First: <input formControlName="firstName" /></p>
      <p>Last: <input formControlName="lastName" /></p>
      <p>{{ fullName$ | async }}</p>
      <p><button (click)="reset()">Reset</button></p>
    </main>
  `,
  imports: [
    ReactiveFormsModule,
    AsyncPipe
  ]
})
export class AppComponent {
  form = inject(FormBuilder).group({
    firstName: [''],
    lastName: [''],
  });

  fullName$ = this.form.valueChanges
    .pipe(map(value => value?.firstName + ' ' + value?.lastName));

  reset() {
    this.form.reset({
      firstName: '',
      lastName: ''
    });
  }
}
