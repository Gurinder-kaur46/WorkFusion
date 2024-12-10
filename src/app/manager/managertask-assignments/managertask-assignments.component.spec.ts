import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagertaskAssignmentsComponent } from './managertask-assignments.component';

describe('ManagertaskAssignmentsComponent', () => {
  let component: ManagertaskAssignmentsComponent;
  let fixture: ComponentFixture<ManagertaskAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagertaskAssignmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagertaskAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
