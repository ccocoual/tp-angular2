import { Injectable } from '@angular/core';
import { Product } from '../model';
import { UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private API_URL = 'http://localhost:8080/rest/';
  private products: Product[];

  constructor(private uppercase: UpperCasePipe, private http: HttpClient) {}

  getProducts(): Observable<Product[]>  {
    return this.http.get(this.API_URL + 'products')
      .map((products: any[]) => {
        return products.map(product => {
          return {title: product.title, description: product.description, photo: product.photo, price: product.price, stock: product.stock};
        });
      })
      .map(products => {
        return products.map(product => {
          product.title = this.uppercase.transform(product.title);
          return product;
        });
      });
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
