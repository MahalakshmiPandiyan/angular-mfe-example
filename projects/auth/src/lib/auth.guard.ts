import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private route:Router){}

  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot):
    boolean{
      if(localStorage.getItem('email')!=null){
        return true;
      }
      else{
        this.route.navigate(['/login']);
        return false
      }
    }
}
