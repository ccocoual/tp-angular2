import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Product } from '../model';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges {
  @Input() data: Product;

  @Output() addToBasket: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private uppercasePipe: UpperCasePipe) {
  }

  ngOnChanges(changes: any) {
    this.data = {
      ...changes.data.currentValue,
      title: this.uppercasePipe.transform(changes.data.currentValue.title)
    }
  }

  addToBasketClick(product: Product) {
    this.addToBasket.emit(product);
  }
}
