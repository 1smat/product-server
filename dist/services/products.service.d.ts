import { Product } from '../interfaces/product.interface';
export declare class ProductsService {
    findAllProducts(subdomain: string): Promise<Product[]>;
}
