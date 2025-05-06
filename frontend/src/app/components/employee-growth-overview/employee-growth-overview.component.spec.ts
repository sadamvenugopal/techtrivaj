import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGrowthOverviewComponent } from './employee-growth-overview.component';

describe('EmployeeGrowthOverviewComponent', () => {
  let component: EmployeeGrowthOverviewComponent;
  let fixture: ComponentFixture<EmployeeGrowthOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeGrowthOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeGrowthOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
