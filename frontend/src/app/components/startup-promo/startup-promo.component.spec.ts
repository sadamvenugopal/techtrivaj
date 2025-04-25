import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupPromoComponent } from './startup-promo.component';

describe('StartupPromoComponent', () => {
  let component: StartupPromoComponent;
  let fixture: ComponentFixture<StartupPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartupPromoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartupPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
