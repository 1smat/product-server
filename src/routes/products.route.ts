import { Router } from 'express';
import { ProductController } from '@controllers/products.controller';
import { Routes } from '@interfaces/routes.interface';

export class ProductRoute implements Routes {
  
  public path = '/products';
  public router = Router();
  public user = new ProductController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.user.getProducts);
  }
}
