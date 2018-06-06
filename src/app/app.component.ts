import { Component, Inject } from '@angular/core';
import { Product } from './model';

import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[];

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    @Inject('welcomeMsg') public title: string
  ) {
    this.products = this.productService.getProducts();
  }

  getTotal(): number {
    return this.customerService.getTotal();
  }

  onAddToBasket(product: Product) {
    this.customerService.addProduct(product);
    this.productService.decreaseStock(product);
  }

  isAvailable(product: Product): boolean {
    return this.productService.isAvailable(product);
  }
}
