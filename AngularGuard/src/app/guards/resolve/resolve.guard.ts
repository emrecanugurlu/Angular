
import { inject } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";



export const resolveFnGuard : ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const httpClient = inject(HttpClient)
    return httpClient.get("https://jsonplaceholder.typicode.com/photos")
}

