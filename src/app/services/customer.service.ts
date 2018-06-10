import { Injectable } from '@angular/core';
import { Product, Customer } from '../model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CustomerService {
  private API_URL = 'http://localhost:8080/rest/';
  basket: Product[] = [];

  constructor(private http: HttpClient) {
  }

  getBasket(): Observable<Product[]>  {
    return this.http.get(this.API_URL + 'basket')
      .map((products: any[]) => {
        return products.map(product => {
          return {title: product.title, description: product.description, photo: product.photo, price: product.price, stock: product.stock};
        });
      }).do(products => this.basket = products);;
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(this.API_URL + 'basket', product)
      .do(() => this.basket.push(product));
  }

  getTotal(): number {
    return this.basket.reduce((total, product) => total + product.price, 0);
  }

  checkout(customer: Customer): Observable<any> {
    return this.http.post(this.API_URL + 'basket/confirm', customer);
  }
}
