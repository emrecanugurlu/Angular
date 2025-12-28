import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Field, form} from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Field],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SignalForms');

  private loginModel = signal<LoginData>({
    email: "",
    password: ""
  })

  protected loginForm = form(this.loginModel)
}
