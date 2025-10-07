import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPlaceholder } from './dashboard-placeholder';

describe('DashboardPlaceholder', () => {
  let component: DashboardPlaceholder;
  let fixture: ComponentFixture<DashboardPlaceholder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPlaceholder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPlaceholder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
