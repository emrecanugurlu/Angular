import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `Home`,
})
export class HomeComponent {

 constructor(private activatedRoute: ActivatedRoute){
    var hasId = activatedRoute.snapshot.paramMap.has("id")
    console.log(hasId)
    var getId = activatedRoute.snapshot.paramMap.get("id")
    console.log(getId)


    activatedRoute.paramMap.subscribe(
      {
        next : parameter=>{
          console.log(parameter.get("id"))
        }
      }
    )

    

 }
}
