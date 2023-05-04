import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <form [formGroup]="frm" (ngSubmit)="onSubmit()">
    <label for="name">Name:</label><br>
    <input type="text" formControlName="name"><br>
    <label for="surname">Surname:</label><br>
    <input type="text" formControlName="surname"><br>
    <label for="name">Email:</label><br>
    <input type="text" formControlName="email"><br>
    <label for="name" >Tel:</label><br>
    <input type="text" formControlName="tel"><br>
    <div formGroupName = "address">
      <label for="name">Country:</label><br>
      <input type="text" formControlName="country"><br>
      <label for="name">City:</label><br>
      <input type="text" formControlName="city"><br>
      <label for="name">Address:</label><br>
      <input type="text" formControlName="address"><br>
    </div><br>
    <button>Submit</button>
  </form>

  <br>

  <button (click)="markAsTouch()">Mark As Touch</button><br>
  <button (click)="markAllAsTouch()">Mark All As Touch</button><br>
  <button (click)="markAsUntouch()">Mark As Untouch</button><br>
  <button (click)="markAsDirty()">Mark As Dirty</button><br>
  <button (click)="markAsPristine()">Mark As Pristine</button><br>
  <button (click)="disable()">Disable</button><br>
  <button (click)="enable()">Enable</button><br>


  <br><br>
  -----------------------------------
  <br><br>
  Form Touched: {{this.frm.touched}} <br>
  FormControl Touched Name: {{this.frm.get("name").touched}} <br>
  FormControl Touched Email: {{this.frm.get("email").touched}} <br>
  FormControl Touched Address: {{this.frm.get("address").touched}} <br>
  FormControl Touched Country: {{this.frm.get("address").get("country").touched}}<br>
  FormControl Touched City: {{this.frm.get("address").get("city").touched}}<br>
  <br><br>
  -----------------------------------
  <br><br>
  FormControl Dirty: {{frm.dirty}} <br>
  FormControl Dirty Name: {{frm.get("name").dirty}} <br>
  <br><br>
  -----------------------------------
  <br><br>
  FormControl Ptistine: {{frm.pristine}} <br>
  FormControl Pristine Name: {{frm.get("name").pristine}} <br>


  `
})
export class AppComponent {
  frm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: [""],
      surname: [""],
      email: [""],
      tel: [""],
      address: formBuilder.group({
        country: [""],
        city: [""],
        address: [""]
      })
    })
  }

  onSubmit() {

  }

  markAsTouch(){
    this.frm.markAsTouched()
    this.frm.get("name").markAsTouched()
  }

  markAllAsTouch(){
    this.frm.markAllAsTouched()
    this.frm.get("address").markAllAsTouched()
  }

  markAsUntouch(){
    this.frm.markAsUntouched()
    this.frm.get("address").markAsUntouched()
  }

  markAsDirty(){
    this.frm.markAsDirty()
    this.frm.get("address").markAsDirty()
  }

  markAsPristine(){
    this.frm.markAsPristine()
    this.frm.get("name").markAsPristine()
  }

  disable(){

    this.frm.get("name").disable()

  }

  enable(){

    this.frm.get("name").enable()
    
  }
}
