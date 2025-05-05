import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipOverviewComponent } from './leadership-overview.component';

describe('LeadershipOverviewComponent', () => {
  let component: LeadershipOverviewComponent;
  let fixture: ComponentFixture<LeadershipOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadershipOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadershipOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
