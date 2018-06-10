import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CustomerService } from '../services';
import { Product } from '../model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket: Product[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getBasket();
  }
  getBasket() {
    this.customerService.getBasket().subscribe(products => this.basket = products);
  }

}
