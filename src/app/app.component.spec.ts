import { CUSTOM_ELEMENTS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Product } from './model';
import { ProductService, CustomerService } from './services';

const testProducts: Product[] = [
  {title: '', description: '', photo: '', price: 0, stock: 0},
  {title: '', description: '', photo: '', price: 0, stock: 0},
];
class ProductServiceMock {
  getProducts() {
    return testProducts;
  }
  isAvailable() {
    return true;
  }
  decreaseStock() {}
}

class CustomerServiceMock {
  getTotal() {
    return 12;
  }
  addProduct() {}
}

@Pipe({name: 'sort'})
class SortPipe implements PipeTransform {
  transform(value) { return value; }
}

const welcomeMsg = 'test';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SortPipe,
      ],
      providers: [
        {provide: ProductService, useClass: ProductServiceMock},
        {provide: CustomerService, useClass: CustomerServiceMock},
        {provide: 'welcomeMsg', useValue: welcomeMsg},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have the title bound in the header',
    inject([CustomerService], (customerService: CustomerService) => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      const compiled = fixture.debugElement.nativeElement;

      fixture.detectChanges();
      expect(compiled.querySelector('header').textContent).toContain(welcomeMsg);
    })
  );


  it('should render a total of 12 in the header', inject([CustomerService], (customerService: CustomerService) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('header').textContent).toContain(customerService.getTotal());
  }));


  it('should bind each product component with its product', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;

    fixture.detectChanges();
    const products = compiled.querySelectorAll('app-product');
    products.forEach((product, i) => {
      expect(product.data).toBe(app.products[i]);
    });
  });

  it('should call addProduct and decreaseStock when onAddToBasket',
    inject([ProductService, CustomerService], (productService: ProductService, customerService: CustomerService) => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      const product = testProducts[0];

      spyOn(customerService, 'addProduct');
      spyOn(productService, 'decreaseStock');

      app.onAddToBasket(product);
      expect(customerService.addProduct).toHaveBeenCalledWith(product);
      expect(productService.decreaseStock).toHaveBeenCalledWith(product);
    })
  );

  it('should not display product which is not available',
    inject([ProductService], (productService: ProductService) => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      const compiled = fixture.debugElement.nativeElement;

      spyOn(productService, 'isAvailable').and.callFake(product => {
        if (product === testProducts[0]) {
          return false;
        }
        return true;
      });

      fixture.detectChanges();
      const products = compiled.querySelectorAll('app-product');
      expect(products.length).toBe(1);
      expect(products[0].data).toBe(app.products[1]);
    })
  );
});
