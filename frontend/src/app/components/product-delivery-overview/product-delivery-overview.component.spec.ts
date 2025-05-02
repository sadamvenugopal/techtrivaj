import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeliveryOverviewComponent } from './product-delivery-overview.component';

describe('ProductDeliveryOverviewComponent', () => {
  let component: ProductDeliveryOverviewComponent;
  let fixture: ComponentFixture<ProductDeliveryOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDeliveryOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDeliveryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
