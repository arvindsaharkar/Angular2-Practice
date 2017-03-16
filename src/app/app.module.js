"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require("@angular/router");
var products_service_1 = require('./services/products.service');
var app_component_1 = require('./app.component');
var header_component_1 = require('./header.component');
var slider_component_1 = require('./slider.component');
var footer_component_1 = require('./footer.component');
var promos_component_1 = require('./promos.component');
var latest_products_component_1 = require('./latest-products.component');
var brands_component_1 = require('./brands.component');
var product_widget_area_component_1 = require('./product-widget-area.component');
var landing_page_component_1 = require('./landing-page.component');
var product_component_1 = require("./product.component");
var routes_1 = require("./routes");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes)
            ],
            declarations: [
                header_component_1.HeaderComponent,
                app_component_1.AppComponent,
                slider_component_1.SliderComponent,
                footer_component_1.FooterComponent,
                promos_component_1.PromosComponent,
                latest_products_component_1.LatestProductsComponent,
                brands_component_1.BrandsComponent,
                product_widget_area_component_1.ProductWidgetAreaComponent,
                landing_page_component_1.LandingPageComponent,
                product_component_1.ProductComponent
            ],
            providers: [products_service_1.ProductsService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map