"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const express_1 = require("express");
const products_controller_1 = require("../controllers/products.controller");
class ProductRoute {
    constructor() {
        this.path = '/products';
        this.router = (0, express_1.Router)();
        this.user = new products_controller_1.ProductController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.user.getProducts);
    }
}
exports.ProductRoute = ProductRoute;
//# sourceMappingURL=products.route.js.map