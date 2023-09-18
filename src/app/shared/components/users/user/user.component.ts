import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public uId!:string;
  public uObj!:Iuser;

  constructor(private _userService:UsersService,
              private _routes:ActivatedRoute,
              private _router:Router
    ) { }

  ngOnInit(): void {
    this.uId = this._routes.snapshot.params['userId']
    console.log(this.uId);

    this.uObj = this._userService.getSingleUser(this.uId)
    console.log(this.uObj);
  }

  onEditUSer(){
    this._router.navigate(['editUser'],{
      queryParamsHandling:'preserve',
      relativeTo:this._routes
    })
  }

  onRemoveUser(id:string){
    this._userService.deleteUSer(this.uId)
  }


}
