import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public isHavingAcc:boolean=false;

  constructor(private _authService:AuthService,
              private _router:Router
    ) { }

  ngOnInit(): void {

  }
  
  logIn(){
    this._authService.loginToApp()
    alert('Logged In successfully !!!')
    this._router.navigate(['/dashboard'])
  }
}
