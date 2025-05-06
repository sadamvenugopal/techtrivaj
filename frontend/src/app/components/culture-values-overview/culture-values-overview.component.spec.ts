import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureValuesOverviewComponent } from './culture-values-overview.component';

describe('CultureValuesOverviewComponent', () => {
  let component: CultureValuesOverviewComponent;
  let fixture: ComponentFixture<CultureValuesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CultureValuesOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CultureValuesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
