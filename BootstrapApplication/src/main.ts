

import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { RouterLink, provideRouter } from "@angular/router";
import { HomeComponent } from "./app/components/home/home.component";
import { ProductComponent } from "./app/components/product/product.component";
import { AboutComponent } from "./app/components/about/about.component";



bootstrapApplication(AppComponent, {
    providers: [
        { provide: "url", useValue: "google.com" },
        provideRouter([
            { path: "home", component: HomeComponent },
            { path: "product", component: ProductComponent },
            { path: "about", component: AboutComponent }
        ])
    ],
})


