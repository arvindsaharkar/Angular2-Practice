import { Component } from '@angular/core';
import {ProductsService} from './services/products.service'

import {ActivatedRoute} from "@angular/router"

@Component({
  templateUrl: 'app/product.component.html',
})
export class ProductComponent  {
    products:any[]
    productType:String
    constructor(private productService:ProductsService, private route:ActivatedRoute){}
    
    ngOnInit(){
        this.productType = this.route.snapshot.params['productType']
        this.products = this.productService.getProductByCategories(this.productType);
    }
}
