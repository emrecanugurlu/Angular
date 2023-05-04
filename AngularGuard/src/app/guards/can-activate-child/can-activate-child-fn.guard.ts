import { ActivatedRouteSnapshot, CanActivateChildFn, RouterStateSnapshot } from "@angular/router"


export const canActivateChildGuard : CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{
    console.log("canActivateChildGuard mekanizması devreye girdi.")
    return false;
}


