import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerleaveRequestsComponent } from './managerleave-requests.component';

describe('ManagerleaveRequestsComponent', () => {
  let component: ManagerleaveRequestsComponent;
  let fixture: ComponentFixture<ManagerleaveRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerleaveRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerleaveRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
