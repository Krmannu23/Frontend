import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private auth:AuthService,public router:Router){}
  //requirement ke hisab se use karo belo inbuilt methods
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log(this.auth.isAuthenticated())
    if(this.auth.isAuthenticated()){
      return true
      
    }
    this.router.navigate(['/'])//navigate to login component ,we use / because path value is '' for LoginComponent
    return false
    
  }
}
