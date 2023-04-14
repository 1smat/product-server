"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const typedi_1 = require("typedi");
const products_service_1 = require("../services/products.service");
class ProductController {
    constructor() {
        this.products = typedi_1.Container.get(products_service_1.ProductsService);
        this.getProducts = async (req, res, next) => {
            const subdomain = req.query.sub;
            try {
                const findAllProductsData = await this.products.findAllProducts(subdomain);
                res.status(200).json({ data: findAllProductsData, message: 'findAll' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=products.controller.js.map