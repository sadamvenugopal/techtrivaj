import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationModernizationOverviewComponent } from './application-modernization-overview.component';

describe('ApplicationModernizationOverviewComponent', () => {
  let component: ApplicationModernizationOverviewComponent;
  let fixture: ComponentFixture<ApplicationModernizationOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationModernizationOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationModernizationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
