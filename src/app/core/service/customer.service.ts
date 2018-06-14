import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product, Customer } from '../model';

@Injectable()
export class CustomerService {

  private _basket: Product[] = [];
  private readonly URL = `${this.API_URL}/basket`;

  constructor(
    @Inject('API_URL') private API_URL: string,
    private http: Http
  ) {}

  getBasket(): Observable<Product[]> {
    return this.http.get(this.URL)
      .map((res: Response) => res.json() as Product[])
      .do((products: Product[]) => this._basket = products);
  }

  addToBasket(product: Product): Observable<any> {
    const headers: Headers = new Headers();
    headers.set('Content-Type', 'application/json');

    return this.http.post(this.URL, JSON.stringify(product), { headers })
      .map((res: Response) => res.json() as Product[])
      .do((products: Product[]) => this._basket.push(product));
  }

  getTotal(): number {
    return this._basket.reduce((prev, next) => prev + next.price, 0);
  }

  checkout(customer: Customer): Observable<any> {
    const url = `${this.URL}/confirm`;
    const headers: Headers = new Headers()
    headers.set('Content-Type', 'application/json');

    return this.http.post(url, JSON.stringify(customer), { headers })
  }
}
