import { Service } from 'typedi';
import { Product } from '@interfaces/product.interface';

@Service()
export class ProductsService {
  public async findAllProducts(subdomain: string): Promise<Product[]> {
    // const products: Product[] = await ProductModel.find();

    const products: Product[] = [
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
      ]

    return products;
  } 
}
