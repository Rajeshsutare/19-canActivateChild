import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouteReuseStrategy, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/model';
import { UsersService } from 'src/app/shared/services/users.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public uid!:string;
  public uobj!:Iuser;
  public canEditUser:boolean=true;
  
  constructor(private _userService:UsersService,
              private _routes:ActivatedRoute,
              private _router:Router,
              private _utilityService:UtilityService

    ) { }

  ngOnInit(): void {
    this.uid = this._routes.snapshot.params['userId']
    console.log(this.uid );

    this.uobj = this._userService.getSingleUser(this.uid)
    console.log(this.uobj );



    if(this._routes.snapshot.queryParams['canEditUser'] === "admin"){
     this.canEditUser = false
    }
    
  }

  updateUser(uname:string,uRole:HTMLSelectElement){
    let uobj:Iuser={
      userName: uname,
      userId: this.uid,
      editStatus: uRole.value as 'admin' | 'candidate'
    }
    this._userService.updateUSerDetail(uobj)
  }

  addNewUser(uNew:HTMLInputElement,uRole:HTMLSelectElement){
    let uobj:Iuser={
      userName: uNew.value as string,
      userId: this._utilityService.generateUuid(),
      editStatus: uRole.value as 'admin' | 'candidate'
    }
    this._userService.adduser(uobj)
  }

}
