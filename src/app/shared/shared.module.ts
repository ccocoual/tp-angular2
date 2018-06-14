import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SortProductsPipe } from './pipe/sort-products.pipe';

@NgModule({
  declarations: [
    SortProductsPipe,
  ],
  exports: [
    CommonModule,
    FormsModule,
    SortProductsPipe,
  ]
})
export class SharedModule { }
