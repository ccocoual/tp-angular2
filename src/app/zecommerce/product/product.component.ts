import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../core/model';


@Component({
  selector: 'our-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() addToBasket: EventEmitter<Product> = new EventEmitter<Product>();

}
