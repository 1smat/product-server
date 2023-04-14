"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProductController", {
    enumerable: true,
    get: ()=>ProductController
});
const _typedi = require("typedi");
const _productsservice = require("../services/products.service");
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
let ProductController = class ProductController {
    constructor(){
        _define_property(this, "products", _typedi.Container.get(_productsservice.ProductsService));
        _define_property(this, "getProducts", async (req, res, next)=>{
            const subdomain = req.query.sub;
            try {
                const findAllProductsData = await this.products.findAllProducts(subdomain);
                res.status(200).json({
                    data: findAllProductsData,
                    message: 'findAll'
                });
            } catch (error) {
                next(error);
            }
        });
    }
};

//# sourceMappingURL=products.controller.js.map