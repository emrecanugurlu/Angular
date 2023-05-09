import { Component } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  template : `
    Home Page
  `
})
export class HomeComponent {
  constructor(private router : Router) {
     var data = router.getCurrentNavigation()?.extras.state;
     console.log(data)
  }

}
