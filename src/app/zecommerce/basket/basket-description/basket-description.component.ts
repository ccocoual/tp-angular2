import { Component, Input } from '@angular/core';
import { Product } from '../../../core/model';

@Component({
  selector: 'our-basket-description',
  template: `
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Produit</th>
          <th>Description</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let product of basket">
          <td>{{ product.title }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price | currency:'EUR':true}}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class BasketDescriptionComponent {
  @Input() basket: Product[];
}
