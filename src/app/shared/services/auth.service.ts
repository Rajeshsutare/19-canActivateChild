import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwIfEmpty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginStatus:boolean=false;

  constructor(private _router:Router,
          
    ) { }

  isAuthenticated():Promise<boolean>{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if(localStorage.getItem('Token')){
          this.loginStatus = true
        }else{
          this.loginStatus = false
        }
        resolve(this.loginStatus)
      },300)
    })
  }

  loginToApp(username:string,password:string){
    if(username === 'jhon@gmail.com' && password === 'zaq1ZAQ!'){
      this.loginStatus=true;
      localStorage.setItem('Token','JWT Token'),
      localStorage.setItem('userrole','admin')
      this._router.navigate(['dashboard'])
      alert('Logged In Successfully !!!')
    }else if(username === 'jun@gmail.com' && password === 'zaq1ZAQ!'){
      this.loginStatus=true;
      localStorage.setItem('Token','JWT Token'),
      localStorage.setItem('userrole','candidate')
      this._router.navigate(['dashboard'])
      alert('Logged In Successfully !!!')
    }else if(username === 'Tony@gmail.com' && password === 'zaq1ZAQ!'){
      this.loginStatus=true;
      localStorage.setItem('Token','JWT Token'),
      localStorage.setItem('userrole','superAdmin')
      this._router.navigate(['dashboard'])
      alert('Logged In Successfully !!!')
    }
    else{
      alert('Invalid Username or Password !!!')
      this._router.navigate(['/'])
    }
    
  }

  logOutFromApp(){
    this.loginStatus=false;
    this._router.navigate(['/']);
    localStorage.removeItem('Token');
    localStorage.removeItem('userrole');
  }
}
