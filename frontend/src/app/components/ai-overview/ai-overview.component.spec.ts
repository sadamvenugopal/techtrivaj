import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiOverviewComponent } from './ai-overview.component';

describe('AiOverviewComponent', () => {
  let component: AiOverviewComponent;
  let fixture: ComponentFixture<AiOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
