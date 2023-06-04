import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { ProductComponent } from "./app/components/product/product.component";



bootstrapApplication(AppComponent,{
  providers:[
    provideRouter([
      {
        path:"product/:id" , 
        data : {
          productName : "Ali"
        },
        component:ProductComponent}
    ],withComponentInputBinding())
  ],
})
