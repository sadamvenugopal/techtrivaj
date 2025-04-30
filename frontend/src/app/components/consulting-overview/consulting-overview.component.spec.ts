import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingOverviewComponent } from './consulting-overview.component';

describe('ConsultingOverviewComponent', () => {
  let component: ConsultingOverviewComponent;
  let fixture: ComponentFixture<ConsultingOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultingOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
