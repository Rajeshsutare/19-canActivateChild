import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './shared/components/login-page/login-page.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AuthGuard } from './shared/services/auth.guard';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { EditUserComponent } from './shared/components/users/user/edit-user/edit-user.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { EditProductComponent } from './shared/components/products/product/edit-product/edit-product.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path :'' , component:LoginPageComponent,
  },
  {
    path :'dashboard' , component:DashboardComponent,
  },
  {
    path:'users' , component:UsersComponent,
    canActivateChild:[AuthGuard],
    children:[
      {
        path:'addNewUser' , component:EditUserComponent
      },
      {
        path:':userId' , component:UserComponent
      },
      {
        path:':userId/editUser' , component:EditUserComponent
      },
    ]
  },

  {
    path:'products' , component:ProductsComponent,
    canActivateChild:[AuthGuard],
    children:[
      {
        path:'addProduct' , component:EditProductComponent
      },
      {
        path:':productId' , component:ProductComponent
      },
      {
        path:':productId/editProduct' , component:EditProductComponent
      },
    ]
  },

  {
    path:'not-found',component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
