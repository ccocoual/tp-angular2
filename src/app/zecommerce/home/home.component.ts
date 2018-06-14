import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProductService, CustomerService } from '../../core/service';
import { Product } from '../../core/model';

const APP_TITLE = new InjectionToken('APP_TITLE', { providedIn: 'root', factory: () => 'Bienvenue sur Zenika Ecommerce' });

@Component({
  selector: 'our-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  total: number;
  products$: Observable<Product[]>;

  constructor(@Inject(APP_TITLE) public title: any, private productService: ProductService, private customerService: CustomerService) {}

  ngOnInit() {
    this.products$ = this.productService.getProducts();
    this.total = this.customerService.getTotal();
  }

  onAddToBasket(product: Product): void {
    this.customerService.addToBasket(product).subscribe(() => {
      this.total = this.customerService.getTotal();
      this.productService.decreaseStock(product);
    });
  }

  isAvailable(product: Product): boolean {
    return this.productService.isAvailable(product);
  }
}
