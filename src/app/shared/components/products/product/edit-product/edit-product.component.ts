import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IprodStatus, Iproduct } from 'src/app/shared/models/model';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public pid!:string;
  public pobj!:Iproduct;
  public canEditProduct:number=1

  constructor(private _productsService:ProductsService,
              private _routes:ActivatedRoute,
              private _router:Router,
              private _utilityService:UtilityService
    ) { }

  ngOnInit(): void {

    this.pid = this._routes.snapshot.params['productId']
    console.log(this.pid);
    this.pobj = this._productsService.getSingleProduct(this.pid)
    console.log(this.pobj);
    
    this._routes.queryParams
    .subscribe((queryParams:Params)=>{
      console.log(queryParams);
      if(queryParams.hasOwnProperty('canEditProduct')){
        this.canEditProduct = +queryParams['canEditProduct']
      }
      
    })
    
  }

  onUpdateProduct(pname:string,pstatus:HTMLSelectElement){
    let pobj:Iproduct={
      prodName: pname,
      prodId:this.pid,
      ProdStatus: pstatus.value as IprodStatus,
      canReturn: this.pobj.canReturn
    }
    this._productsService.updateProduct(pobj)
  }

  onAddProduct(pname:HTMLInputElement,pstatus:HTMLSelectElement){
    let pobj:Iproduct={
      prodName: pname.value as string,
      prodId: this._utilityService.generateUuid(),
      ProdStatus: pstatus.value as IprodStatus,
      canReturn: Math.random() >= 5 ? 1 : 0
    }
    this._productsService.addNewProduct(pobj)
  }

}
