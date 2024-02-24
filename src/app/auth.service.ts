import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isAuthenticated():boolean{
    //manually setDevToken  value
    if(window.localStorage.getItem('devToken')){
      //return true if devToken exist
      return true;
    }
    else{
     return false;
    }
  }
}
