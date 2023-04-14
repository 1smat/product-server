import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Product} from '@interfaces/product.interface';
import { ProductsService } from '@services/products.service';

export class ProductController {
  public products = Container.get(ProductsService);

  public getProducts = async (req: Request, res: Response, next: NextFunction) => {
    const subdomain : any = req.query.sub

    try {
      const findAllProductsData: Product[] = await this.products.findAllProducts(subdomain);
  

      res.status(200).json({ data: findAllProductsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
}
