import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data: Product;

  @Output() addToBasket: EventEmitter<Product> = new EventEmitter<Product>();

  addToBasketClick(product: Product) {
    this.addToBasket.emit(product);
  }
}
