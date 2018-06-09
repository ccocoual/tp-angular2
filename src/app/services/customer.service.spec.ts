import { TestBed, inject } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { Product } from '../model/product';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const product1: Product = { title: '', description: '', photo: '', price: 23, stock: 0 };
const product2: Product = { title: '', description: '', photo: '', price: 12, stock: 0 };

describe('CustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerService]
    });
  });

  it('should be created with no product', inject([CustomerService], (service: CustomerService) => {
    expect(service).toBeTruthy();
    expect(service.basket.length).toBe(0);
  }));

  it('should add products to the list when using addProduct', inject(
    [CustomerService, HttpTestingController],
    (service: CustomerService, http: HttpTestingController) => {
      service.addProduct(product1).subscribe(() => {
        expect(service.basket).toEqual([product1]);
      });
      http.expectOne('http://localhost:8080/rest/basket').flush({});
    }
  ));

  it('should calculate the total price when using getTotal', inject([CustomerService], (service: CustomerService) => {
    service.basket = [product1, product2];
    expect(service.getTotal()).toBe(product1.price + product2.price);
  }));
});
