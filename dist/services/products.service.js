"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
let ProductsService = class ProductsService {
    async findAllProducts(subdomain) {
        // const products: Product[] = await ProductModel.find();
        const products = [
            {
                _id: "0",
                title: "Iphone X",
                desc: "White 64gb",
                message: `Some logic with ${subdomain} subdomain on server`
            },
            {
                _id: "1",
                title: "Iphone 11",
                desc: "Black 128gb",
                message: `Some logic with ${subdomain} subdomain on server`
            },
            {
                _id: "2",
                title: "Iphone 12",
                desc: "Midnight 256gb",
                message: `Some logic with ${subdomain} subdomain on server`
            }
        ];
        return products;
    }
};
ProductsService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map