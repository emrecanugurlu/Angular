import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <form [formGroup]="frm" (ngSubmit)="onSubmit()">
    <label for="name">Name:</label><br>
    <input type="text" formControlName="name"><br>
    <label for="name">Surname:</label><br>
    <input type="text" formControlName= "surname"><br>
    <label for="name">Tel:</label><br>
    <input type="text" formControlName= "tel"><br><br>
    <button>Send</button>
  </form>
  `
})
export class AppComponent {
  frm:FormGroup

  constructor(private formBuilder:FormBuilder) {
    this.frm = formBuilder.group({
      name :[""],
      surname :[""],
      tel :[""],
    })
  }
  onSubmit(){
    console.log(this.frm.value);
  }

}



