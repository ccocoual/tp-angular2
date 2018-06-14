import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../core/model';

@Pipe({
  name: 'sort'
})
export class SortProductsPipe implements PipeTransform {

  transform(products?: Product[], column?: keyof Product): any {
    if (products) {
      return products.sort((p1, p2) => {
        if (p1[column] > p2[column]) {
          return 1;
        } else if (p1[column] < p2[column]) {
          return -1;
        }
        return 0;
      });
    } else {
      return products;
    }
  }

}
