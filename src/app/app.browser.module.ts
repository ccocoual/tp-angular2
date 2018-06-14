import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
// libs
import { TransferHttpCacheModule } from '@nguniversal/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';
// components
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { environment } from '../environments/environment';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({appId: 'tp-angular'}),
    TransferHttpCacheModule,
    BrowserTransferStateModule,
    AppModule,
  ],
  providers: [
    { provide: 'ORIGIN_URL', useValue: location.origin }
  ]
})
export class AppBrowserModule {
}
