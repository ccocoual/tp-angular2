import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data: Product;

  @Output() addToBasket: EventEmitter<number> = new EventEmitter<number>();

  addToBasketClick(amount: number) {
    this.addToBasket.emit(amount);
  }
}
