import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasketModule } from './basket/basket.module';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'basket', loadChildren: 'app/zecommerce/basket/basket.module#BasketModule'},
]
