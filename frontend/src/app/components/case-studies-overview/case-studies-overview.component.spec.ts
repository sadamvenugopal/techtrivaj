import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudiesOverviewComponent } from './case-studies-overview.component';

describe('CaseStudiesOverviewComponent', () => {
  let component: CaseStudiesOverviewComponent;
  let fixture: ComponentFixture<CaseStudiesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudiesOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudiesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
