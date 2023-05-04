import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";

export var canActivateFnGuard :  CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    console.log("newExampleGuard mekanizması devreye girdi")
    return true
}


