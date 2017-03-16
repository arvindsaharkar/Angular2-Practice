import {Router} from "@angular/router"
import {LandingPageComponent} from "./landing-page.component"
import {ProductComponent} from "./product.component"
import {ProductDetailComponent} from "./product-detail.component"

export const appRoutes = [
    {path:"", component:LandingPageComponent},
    {path:":productType", component:ProductComponent}//,
    {path:":productType/:productId", component:ProductDetailComponent}
]