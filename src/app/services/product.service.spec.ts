import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';
import { Product } from '../model/product';
import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

describe('ProductService', () => {

  @Pipe({name: 'uppercase'})
  class UpperCasePipeMock implements PipeTransform {
    transform(value) { return value; }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService, {provide: UpperCasePipe, useClass: UpperCasePipeMock}],
    });
  });

  it('should be created with 4 products',
    inject([ProductService], (service: ProductService) => {
      expect(service).toBeTruthy();
      expect(service.getProducts().length).toBe(4);
    })
  );

  it('should isTheLast return true only if stock is 1',
    inject([ProductService], (service: ProductService) => {
      const product: Product = {title: '', description: '', photo: '', price: 0, stock: 0};
      expect(service.isTheLast(product)).toBe(false);
      product.stock = 1;
      expect(service.isTheLast(product)).toBe(true);
      product.stock = 2;
      expect(service.isTheLast(product)).toBe(false);
      product.stock = 100;
      expect(service.isTheLast(product)).toBe(false);
    })
  );

  it('should isAvailable return false only if stock is 0',
    inject([ProductService], (service: ProductService) => {
      const product: Product = {title: '', description: '', photo: '', price: 0, stock: 0};
      expect(service.isAvailable(product)).toBe(false);
      product.stock = 1;
      expect(service.isAvailable(product)).toBe(true);
      product.stock = 2;
      expect(service.isAvailable(product)).toBe(true);
      product.stock = 100;
      expect(service.isAvailable(product)).toBe(true);
    })
  );

  it('should decreaseStock decrease product stock of 1',
    inject([ProductService], (service: ProductService) => {
      const product: Product = {title: '', description: '', photo: '', price: 0, stock: 12};
      service.decreaseStock(product);
      expect(product.stock).toBe(12 - 1);
    })
  );
});
