import { Component } from '@angular/core';
import {ProductsService} from './services/products.service'

import {ActivatedRoute} from "@angular/router"

@Component({
  templateUrl: 'app/product-detail.component.html',
})
export class ProductDetailComponent  {
    products:any[]
    productType:String
    productId:Number
    constructor(private productService:ProductsService, private route:ActivatedRoute){}
    
    ngOnInit(){
        this.productType = this.route.snapshot.params['productType']
        this.productId = this.route.snapshot.params['productId']
        this.products = this.productService.getProductDetails(this.productType, this.productId);
    }
}
