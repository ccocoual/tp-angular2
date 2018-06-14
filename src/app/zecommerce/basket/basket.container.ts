import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CustomerService } from '../../core/service';
import { Product, Customer } from '../../core/model';

@Component({
  selector: 'our-basket',
  template: `
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <our-basket-description [basket]="basket$ | async"></our-basket-description>
      </div>
      <div class="col-md-6 col-sm-12">
        <our-basket-form (onCheckout)="checkout($event)"></our-basket-form>
      </div>
    </div>
  `
})
export class BasketContainer implements OnInit {
  basket$: Observable<Product[]>;
  customer: Customer = {};

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.basket$ = this.customerService.getBasket();
  }

  checkout(customer: Customer) {
    this.customerService.checkout(customer).subscribe(_ => {
      this.router.navigate(['/home']);
    })
  }

}
