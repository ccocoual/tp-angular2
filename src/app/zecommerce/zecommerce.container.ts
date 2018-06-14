import { Component } from '@angular/core';

@Component({
  selector: 'our-zecommerce',
  template: `
    <our-menu></our-menu>
    <div class="container">
      <router-outlet></router-outlet>
      <hr>

      <our-footer>
        Copyright &copy; Your Website 2016
      </our-footer>

    </div>
  `
})
export class ZecommerceContainer { }
