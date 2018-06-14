import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { BasketRoutingModule } from './basket.routing.module';

import { BasketDescriptionComponent } from './basket-description/basket-description.component';
import { BasketFormComponent } from './basket-form/basket-form.component';
import { BasketContainer } from './basket.container';

@NgModule({
  imports: [
    SharedModule,
    BasketRoutingModule,
  ],
  declarations: [
    BasketContainer,
    BasketFormComponent,
    BasketDescriptionComponent,
  ],
  exports: [BasketContainer],
})
export class BasketModule { }
