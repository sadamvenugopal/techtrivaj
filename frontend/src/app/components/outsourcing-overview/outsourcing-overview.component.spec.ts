import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsourcingOverviewComponent } from './outsourcing-overview.component';

describe('OutsourcingOverviewComponent', () => {
  let component: OutsourcingOverviewComponent;
  let fixture: ComponentFixture<OutsourcingOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutsourcingOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutsourcingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
