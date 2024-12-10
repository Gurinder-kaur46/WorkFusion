import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerperformanceReviewsComponent } from './managerperformance-reviews.component';

describe('ManagerperformanceReviewsComponent', () => {
  let component: ManagerperformanceReviewsComponent;
  let fixture: ComponentFixture<ManagerperformanceReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerperformanceReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerperformanceReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
