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
    const addedProduct = app.products[0];

    app.total = initPrice;
    app.onAddToBasket(addedProduct);
    expect(app.total).toBe(initPrice + addedProduct.price);
  }));

  it('should update stock when calling onAddToBasket()', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    const initPrice = 12;
    const addedProduct = app.products[0];
    const initStock = addedProduct.stock;

    app.total = initPrice;
    app.onAddToBasket(addedProduct);
    expect(addedProduct.stock ).toBe(initStock - 1);
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

  it('should not display a component with an empty stock', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;

    app.products = [
      {
        title: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        photo: 'http://placehold.it/800x500',
        price: 10,
        stock: 5,
      },
      {
        title: 'Product 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        photo: 'http://placehold.it/800x500',
        price: 20,
        stock: 0,
      },
    ];

    fixture.detectChanges();
    const products = compiled.querySelectorAll('app-product');
    expect(products.length).toEqual(1);
    expect(products[0].data).toBe(app.products[0]);
  }));
});
