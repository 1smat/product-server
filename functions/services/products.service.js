"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProductsService", {
    enumerable: true,
    get: ()=>ProductsService
});
const _typedi = require("typedi");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ProductsService = class ProductsService {
    async findAllProducts(subdomain) {
        const products = [
            {
                _id: "0",
                title: "Iphone X",
                desc: "White 64gb",
                message: `Some logic with ${subdomain} subdomain from server`
            },
            {
                _id: "1",
                title: "Iphone 11",
                desc: "Black 128gb",
                message: `Some logic with ${subdomain} subdomain from server`
            },
            {
                _id: "2",
                title: "Iphone 12",
                desc: "Midnight 256gb",
                message: `Some logic with ${subdomain} subdomain from server`
            }
        ];
        return products;
    }
};
ProductsService = __decorate([
    (0, _typedi.Service)()
], ProductsService);

//# sourceMappingURL=products.service.js.map