import { Component, Inject, OnInit } from '@angular/core';
import { Product } from './model';

import { ProductService, CustomerService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    @Inject('welcomeMsg') public title: string
  ) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => this.products = products);
    this.customerService.getBasket().subscribe();
  }

  getTotal(): number {
    return this.customerService.getTotal();
  }

  onAddToBasket(product: Product) {
    this.customerService.addProduct(product)
      .subscribe(() => this.productService.decreaseStock(product));
  }

  isAvailable(product: Product): boolean {
    return this.productService.isAvailable(product);
  }
}
