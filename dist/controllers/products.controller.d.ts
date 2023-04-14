import { NextFunction, Request, Response } from 'express';
import { ProductsService } from '../services/products.service';
export declare class ProductController {
    products: ProductsService;
    getProducts: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
