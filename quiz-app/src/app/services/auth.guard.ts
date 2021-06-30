import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";



@Injectable()
export class AuthGuard implements CanActivate {

constructor(private _router: Router){}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.isLoggedIn()) {
        return true;
    }
    this._router.navigate(['/login']);
    return false;

}

isLoggedIn(): boolean{
    let status = false;
    if(localStorage.getItem('isLoggedIn') == "true"){
        status = true;
    }else {
        status = false;
    }
    return status;
}




}