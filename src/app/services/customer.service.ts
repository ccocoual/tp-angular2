import { Injectable } from '@angular/core';
import { Product } from '../model';

@Injectable()
export class CustomerService {
  basket: Product[];

  constructor() {
    this.basket = [];
  }

  addProduct(product: Product) {
    this.basket.push(product);
  }

  getTotal(): number {
    return this.basket.reduce((total, product) => total + product.price, 0);
  }

}
