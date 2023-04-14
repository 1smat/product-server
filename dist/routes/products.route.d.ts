import { ProductController } from '../controllers/products.controller';
import { Routes } from '../interfaces/routes.interface';
export declare class ProductRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    user: ProductController;
    constructor();
    private initializeRoutes;
}
