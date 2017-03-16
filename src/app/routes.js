"use strict";
var landing_page_component_1 = require("./landing-page.component");
var product_component_1 = require("./product.component");
var product_detail_component_1 = require("./product-detail.component");
exports.appRoutes = [
    { path: "", component: landing_page_component_1.LandingPageComponent },
    { path: ":productType", component: product_component_1.ProductComponent } //,
    ,
    { path: ":productType/:productId", component: product_detail_component_1.ProductDetailComponent }
];
//# sourceMappingURL=routes.js.map