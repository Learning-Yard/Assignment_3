import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentguardGuard implements CanActivate {
  role:string;
  constructor(private routes : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.role = localStorage.getItem("role");
      // console.log(this.username);
      console.log(this.routes.url);
      if(this.role === "student"){
        return true;
      }else{
        localStorage.clear();
        this.routes.navigateByUrl('/login');
        return false;
      }
      // return true;
  }

}
