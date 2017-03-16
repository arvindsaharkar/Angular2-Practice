import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {RouterModule} from "@angular/router"

import { ProductsService }  from './services/products.service'

import { AppComponent }  from './app.component'
import { HeaderComponent }  from './header.component'
import { SliderComponent }  from './slider.component'
import { FooterComponent }  from './footer.component'
import { PromosComponent }  from './promos.component'
import { LatestProductsComponent }  from './latest-products.component'
import { BrandsComponent }  from './brands.component'
import { ProductWidgetAreaComponent }  from './product-widget-area.component'
import { LandingPageComponent }  from './landing-page.component'
import {ProductComponent} from "./product.component"

import {appRoutes} from "./routes"


@NgModule({
  imports:      [ 
      BrowserModule,
      RouterModule.forRoot(appRoutes)
  ],
  declarations: [
      HeaderComponent,
      AppComponent,
      SliderComponent,
      FooterComponent,
      PromosComponent,
      LatestProductsComponent,
      BrandsComponent,
      ProductWidgetAreaComponent,
      LandingPageComponent,
      ProductComponent
  ],
  providers: [ ProductsService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
