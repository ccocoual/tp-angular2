/* tslint:disable:member-ordering no-unused-variable */
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
  LOCALE_ID,
} from '@angular/core';

import {
  CommonModule,
  UpperCasePipe,
  APP_BASE_HREF,
  registerLocaleData,
} from '@angular/common';

import {
  CustomerService,
  ProductService,
} from './service'

import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@NgModule({
  imports: [CommonModule],
  providers: [
    CustomerService,
    ProductService,
    UpperCasePipe,
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: APP_BASE_HREF, useValue: '/'},
    { provide: 'API_URL', useValue: 'http://localhost:8080/rest'}
  ],
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        CustomerService,
        ProductService,
        UpperCasePipe,
        { provide: LOCALE_ID, useValue: 'fr-FR' },
        { provide: APP_BASE_HREF, useValue: '/'},
        { provide: 'API_URL', useValue: 'http://localhost:8080/rest'}
      ]
    };
  }
}
