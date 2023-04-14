"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const products_route_1 = require("./routes/products.route");
const app = new app_1.App([new products_route_1.ProductRoute()]);
app.listen();
//# sourceMappingURL=server.js.map