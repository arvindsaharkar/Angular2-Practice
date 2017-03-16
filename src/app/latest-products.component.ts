import { Component } from '@angular/core'

import {ProductsService} from './services/products.service'

@Component({
  selector: 'Latest-Products',
  templateUrl: 'app/latest-products.component.html',
})
export class LatestProductsComponent  {
    products:any[]
    
    constructor(private productService:ProductsService){}
    
    ngOnInit(){
        this.products = this.productService.getLatestProducts();
    }
}
