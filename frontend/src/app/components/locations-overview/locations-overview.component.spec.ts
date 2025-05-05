import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsOverviewComponent } from './locations-overview.component';

describe('LocationsOverviewComponent', () => {
  let component: LocationsOverviewComponent;
  let fixture: ComponentFixture<LocationsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
