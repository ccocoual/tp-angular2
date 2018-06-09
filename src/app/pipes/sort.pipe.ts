import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: Product[], property?: any): any {
    return [...value].sort((a,b) => {
      if(a[property] < b[property]) return -1;
      if(a[property] > b[property]) return 1;
      return 0;
    });
  }

}
