import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsciousCapitalismOverviewComponent } from './conscious-capitalism-overview.component';

describe('ConsciousCapitalismOverviewComponent', () => {
  let component: ConsciousCapitalismOverviewComponent;
  let fixture: ComponentFixture<ConsciousCapitalismOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsciousCapitalismOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsciousCapitalismOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
