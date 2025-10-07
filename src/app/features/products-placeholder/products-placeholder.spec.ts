import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPlaceholder } from './products-placeholder';

describe('ProductsPlaceholder', () => {
  let component: ProductsPlaceholder;
  let fixture: ComponentFixture<ProductsPlaceholder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPlaceholder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPlaceholder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
