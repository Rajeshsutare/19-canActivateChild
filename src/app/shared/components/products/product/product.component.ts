import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/model';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public pid!:string;
  public pObj!:Iproduct;

  constructor(private _productsService:ProductsService,
              private _routes:ActivatedRoute,
              private _router:Router
    ) { }

  ngOnInit(): void {
    this.pid = this._routes.snapshot.params['productId']
    console.log(this.pid );
    this.pObj = this._productsService.getSingleProduct(this.pid)
    console.log(this.pObj);

  }
  onRemoveProduct(id:string){
    this._productsService.removeProduct(this.pid)
  }

  onEditProduct(){
    this._router.navigate(['editProduct'],{
      queryParamsHandling:'preserve',
      relativeTo:this._routes
    })
  }

}
