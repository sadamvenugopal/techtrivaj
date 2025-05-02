import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernCollaborationOverviewComponent } from './modern-collaboration-overview.component';

describe('ModernCollaborationOverviewComponent', () => {
  let component: ModernCollaborationOverviewComponent;
  let fixture: ComponentFixture<ModernCollaborationOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernCollaborationOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernCollaborationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
