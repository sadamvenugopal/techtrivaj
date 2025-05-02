import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformEngineeringOverviewComponent } from './platform-engineering-overview.component';

describe('PlatformEngineeringOverviewComponent', () => {
  let component: PlatformEngineeringOverviewComponent;
  let fixture: ComponentFixture<PlatformEngineeringOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformEngineeringOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformEngineeringOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
