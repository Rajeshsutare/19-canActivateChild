import { Injectable } from '@angular/core';
import { throwIfEmpty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginStatus:boolean=false;

  constructor() { }

  isAuthenticated():Promise<boolean>{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if(localStorage.getItem('Tocken')){
          this.loginStatus = true
        }else{
          this.loginStatus = false
        }

        resolve(this.loginStatus)
      },300)
    })
  }

  loginToApp(){
    this.loginStatus=true;
    localStorage.setItem('Token','JWT Token')
  }

  logOutFromApp(){
    this.loginStatus=false;
    localStorage.removeItem('Token')
  }
}
