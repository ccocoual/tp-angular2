import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UpperCasePipe } from '@angular/common';
import { Product } from '../model/product';

@Injectable()
export class ProductService {

  private _products: Product[];

  constructor(
    @Inject('API_URL') private API_URL: string,
    private http: Http,
    private upperCasePipe: UpperCasePipe
    ) {
  }

  getProducts(): Observable<Product[]> {
    const url = `${this.API_URL}/products`;
    return this.http.get(url)
              .map((res: Response) => res.json() as Product[])
              .map((products: Product[]) => {
                return products.map((product: Product) => {
                  product.title = this.upperCasePipe.transform(product.title)
                  return product;
                })
              });
  }

  isTheLast(product: Product): boolean {
    return product.stock === 1;
  }

  isAvailable(product: Product): boolean {
    return product.stock > 0;
  }

  decreaseStock(product: Product): void {
    product.stock = product.stock - 1;
  }
}
