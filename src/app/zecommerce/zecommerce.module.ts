import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';


import { ZecommerceContainer } from './zecommerce.container';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';

import { routes } from './zecommerce.router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    ZecommerceContainer,
    HomeComponent,
    MenuComponent,
    ProductComponent,
    FooterComponent,
  ],
  exports: [
    ZecommerceContainer,
  ],
})
export class ZecommerceModule { }
