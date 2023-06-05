import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';




@Component({
  selector: 'app-root',
  template: `
  App Component
  <br>
  <!-- <app-home>
    <span style="background-color: antiquewhite;">Bu bir deneme metnidir...</span>
  </app-home> -->

  
  <app-home>
    <div class="deneme1">Bu deneme1 için deneme yazısıdır...</div>
    <div class="deneme2">Bu deneme2 için deneme yazısıdır...</div>
  </app-home>


  `,
  standalone: true,
  imports: [HomeComponent]
})
export class AppComponent {
  title = 'ngContent';
}


