import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernDataOverviewComponent } from './modern-data-overview.component';

describe('ModernDataOverviewComponent', () => {
  let component: ModernDataOverviewComponent;
  let fixture: ComponentFixture<ModernDataOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernDataOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernDataOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
