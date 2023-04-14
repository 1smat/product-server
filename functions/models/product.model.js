"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProductModel", {
    enumerable: true,
    get: ()=>ProductModel
});
const _mongoose = require("mongoose");
const ProductSchema = new _mongoose.Schema({
    _id: String,
    title: String,
    desc: String
});
const ProductModel = (0, _mongoose.model)('Product', ProductSchema);

//# sourceMappingURL=product.model.js.map