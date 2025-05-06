import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusionDiversityOverviewComponent } from './inclusion-diversity-overview.component';

describe('InclusionDiversityOverviewComponent', () => {
  let component: InclusionDiversityOverviewComponent;
  let fixture: ComponentFixture<InclusionDiversityOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InclusionDiversityOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InclusionDiversityOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
