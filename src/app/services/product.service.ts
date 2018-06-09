import { Injectable } from '@angular/core';
import { Product } from '../model';
import { UpperCasePipe } from '@angular/common';

@Injectable()
export class ProductService {
  products: Product[];

  constructor(private uppercasePipe: UpperCasePipe) {
    this.products = [
      {
        title: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        photo: 'http://placehold.it/800x500',
        price: 10,
        stock: 5,
      },
      {
        title: 'Product 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        photo: 'http://placehold.it/800x500',
        price: 20,
        stock: 1,
      },
      {
        title: 'Product 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        photo: 'http://placehold.it/800x500',
        price: 30,
        stock: 2,
      },
      {
        title: 'Product 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        photo: 'http://placehold.it/800x500',
        price: 40,
        stock: 0,
      },
    ];
  }

  getProducts(): Product[] {
    return this.products.map(product => ({...product, title: this.uppercasePipe.transform(product.title)}));
  }

  isTheLast(product: Product): boolean {
    return product.stock === 1;
  }

  isAvailable(product: Product): boolean {
    return product.stock > 0;
  }

  decreaseStock(product: Product) {
    product.stock -= 1;
  }

}
