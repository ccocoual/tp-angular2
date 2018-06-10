import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { CustomerService } from '../services';
import { Product, Customer } from '../model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket: Product[];
  customer: Customer;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.getBasket();
    this.customer = new Customer();
  }
  getBasket() {
    this.customerService.getBasket().subscribe(products => this.basket = products);
  }

  checkout() {
    this.customerService.checkout(this.customer).subscribe(() => this.router.navigate(['']));
  }

}
