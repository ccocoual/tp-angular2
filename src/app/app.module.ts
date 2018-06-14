import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';

import './rxjs-operators';

import { AppComponent } from './app.component';

// Module for shared dependencies
import { SharedModule } from './shared/shared.module'; // Import shared components, pipes but don't provide services
import { CoreModule } from './core/core.module'; // Provide services and share models to garanty singleton

import { ZecommerceModule } from './zecommerce/zecommerce.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'tp-angular'}),
    HttpModule,
    CoreModule.forRoot(),
    SharedModule,
    ZecommerceModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
