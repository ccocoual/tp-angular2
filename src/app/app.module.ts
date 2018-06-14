import { NgModule, Inject, LOCALE_ID, PLATFORM_ID, APP_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';

import { isPlatformBrowser } from '@angular/common';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
