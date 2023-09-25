import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _authService:AuthService,
              private _snackBar:MatSnackBar,
    ) { }

  ngOnInit(): void {
  }

  logOut(){
    this._authService.logOutFromApp();
    this._snackBar.open('Logged Out Successfully...','close')
  }

}
