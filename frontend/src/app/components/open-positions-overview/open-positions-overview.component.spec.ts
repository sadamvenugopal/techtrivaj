import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPositionsOverviewComponent } from './open-positions-overview.component';

describe('OpenPositionsOverviewComponent', () => {
  let component: OpenPositionsOverviewComponent;
  let fixture: ComponentFixture<OpenPositionsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenPositionsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenPositionsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
