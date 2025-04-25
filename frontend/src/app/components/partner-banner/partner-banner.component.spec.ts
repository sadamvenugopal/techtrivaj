import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerBannerComponent } from './partner-banner.component';

describe('PartnerBannerComponent', () => {
  let component: PartnerBannerComponent;
  let fixture: ComponentFixture<PartnerBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
