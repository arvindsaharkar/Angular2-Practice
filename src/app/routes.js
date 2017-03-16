"use strict";
var landing_page_component_1 = require("./landing-page.component");
var product_component_1 = require("./product.component");
exports.appRoutes = [
    { path: "", component: landing_page_component_1.LandingPageComponent },
    { path: ":productType", component: product_component_1.ProductComponent } //,
];
//# sourceMappingURL=routes.js.map