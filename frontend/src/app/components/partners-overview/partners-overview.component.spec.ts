import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersOverviewComponent } from './partners-overview.component';

describe('PartnersOverviewComponent', () => {
  let component: PartnersOverviewComponent;
  let fixture: ComponentFixture<PartnersOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
