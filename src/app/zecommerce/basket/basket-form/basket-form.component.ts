import { Component, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../../core/model';

@Component({
  selector: 'our-basket-form',
  templateUrl: './basket-form.component.html',
})
export class BasketFormComponent {
  @Output() onCheckout: EventEmitter<Customer> = new  EventEmitter<Customer>();

  customer: Customer = {};

  checkoutHandler() {
    this.onCheckout.emit(this.customer);
  }
}
