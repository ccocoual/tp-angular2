import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Product } from './model';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have a total starting at 0', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.total).toEqual(0);
  }));

  it('should render a total of 0 in the header', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('header').textContent).toContain(0);
  }));

  it('should render a total of 35 in the header', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;

    app.total = 35;
    fixture.detectChanges();
    expect(compiled.querySelector('header').textContent).toContain(35);
  }));

  it('should update price when calling onAddToBasket()', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    const initPrice = 12;
    const addedPrice = 125;
    app.total = initPrice;
    app.onAddToBasket(addedPrice);
    expect(app.total).toBe(initPrice + addedPrice);
  }));

  it('should bind each product component with its product', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;

    fixture.detectChanges();
    const products = compiled.querySelectorAll('app-product');
    products.forEach((product, i) => {
      expect(product.data).toBe(app.products[i]);
    });
  }));
});
