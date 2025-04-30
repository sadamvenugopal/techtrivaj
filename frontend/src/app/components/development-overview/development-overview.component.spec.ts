import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentOverviewComponent } from './development-overview.component';

describe('DevelopmentOverviewComponent', () => {
  let component: DevelopmentOverviewComponent;
  let fixture: ComponentFixture<DevelopmentOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopmentOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopmentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
