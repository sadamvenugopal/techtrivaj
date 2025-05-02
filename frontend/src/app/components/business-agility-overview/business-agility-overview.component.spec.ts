import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAgilityOverviewComponent } from './business-agility-overview.component';

describe('BusinessAgilityOverviewComponent', () => {
  let component: BusinessAgilityOverviewComponent;
  let fixture: ComponentFixture<BusinessAgilityOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessAgilityOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessAgilityOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
