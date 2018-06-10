import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketComponent } from './basket.component';
import { Observable } from 'rxjs/Observable';
import { CustomerService } from '../services';

class CustomerServiceMock {
  getBasket() {
    return Observable.of();
  }
  getTotal() {
    return 12;
  }
  addProduct() {}
}

describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketComponent ],
      providers: [
        {provide: CustomerService, useClass: CustomerServiceMock},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
