import { model, Schema, Document } from 'mongoose';
import { Product } from '@interfaces/product.interface';

const ProductSchema: Schema = new Schema({
  _id: String,
  title: String,
  desc: String
});

export const ProductModel = model<Product & Document>('Product', ProductSchema);