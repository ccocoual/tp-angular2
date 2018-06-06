import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Product } from '../model';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  const testProduct: Product = {
    title: 'Produit 1',
    description: 'Je suis le produit 1',
    photo: 'http://produit1',
    price: 12,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.data = testProduct;
    fixture.detectChanges();
  });

  it('should bind title and price in the h3', () => {
    const h3Content = fixture.nativeElement.querySelector('h3').textContent;
    expect(h3Content).toContain(testProduct.title);
    expect(h3Content).toContain(testProduct.price);
  });

  it('should bind the photo url', () => {
    const img = fixture.nativeElement.querySelector('img');
    expect(img.src).toContain(testProduct.photo);
  });

  it('should emit addToBasket event on a click on the button', () => {
    spyOn(component.addToBasket, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.addToBasket.emit).toHaveBeenCalled();
  });
});
