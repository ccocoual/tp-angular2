import { Component } from '@angular/core';
import { Product } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  total: number;

  products: Product[];

  constructor() {
    this.total = 0;
    this.products = [
      {
        title: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        photo: 'http://placehold.it/800x500',
        price: 10,
      },
      {
        title: 'Product 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        photo: 'http://placehold.it/800x500',
        price: 20,
      },
      {
        title: 'Product 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        photo: 'http://placehold.it/800x500',
        price: 30,
      },
      {
        title: 'Product 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        photo: 'http://placehold.it/800x500',
        price: 40,
      },
    ];
  }


  onAddToBasket(amount: number) {
    this.total += amount;
  }
}
