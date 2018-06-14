import { NgModule } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { BasketContainer } from './basket.container'
const routes: Routes = [
  {
    path: '',
    component: BasketContainer,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketRoutingModule {}
