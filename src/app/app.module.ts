import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';
import { UpperCasePipe } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductService,
    CustomerService,
    {provide: 'welcomeMsg', useValue: 'Bienvenue sur Zenika Ecommerce'},
    UpperCasePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
