import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProcessTransformationOverviewComponent } from './business-process-transformation-overview.component';

describe('BusinessProcessTransformationOverviewComponent', () => {
  let component: BusinessProcessTransformationOverviewComponent;
  let fixture: ComponentFixture<BusinessProcessTransformationOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessProcessTransformationOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessProcessTransformationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
