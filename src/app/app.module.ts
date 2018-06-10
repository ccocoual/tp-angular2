import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { ProductService, CustomerService } from './services';
import { SortPipe } from './pipes/sort.pipe';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'basket', component: BasketComponent }];

@NgModule({
  declarations: [AppComponent, MenuComponent, ProductComponent, SortPipe, HomeComponent, BasketComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes), FormsModule],
  providers: [
    ProductService,
    CustomerService,
    UpperCasePipe,
    { provide: 'welcomeMsg', useValue: 'Bienvenue sur Zenika Ecommerce' },
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
