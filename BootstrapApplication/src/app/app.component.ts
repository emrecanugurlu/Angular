import { Component, Inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports : [RouterLink,RouterOutlet]
})
export class AppComponent {
  constructor(@Inject("url") private url : string){
    console.log(url)
  }
}
