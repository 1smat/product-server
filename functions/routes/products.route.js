"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProductRoute", {
    enumerable: true,
    get: ()=>ProductRoute
});
const _express = require("express");
const _productscontroller = require("../controllers/products.controller");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
let ProductRoute = class ProductRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, this.user.getProducts);
    }
    constructor(){
        _define_property(this, "path", '/products');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "user", new _productscontroller.ProductController());
        this.initializeRoutes();
    }
};

//# sourceMappingURL=products.route.js.map