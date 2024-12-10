import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerreportsComponent } from './managerreports.component';

describe('ManagerreportsComponent', () => {
  let component: ManagerreportsComponent;
  let fixture: ComponentFixture<ManagerreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerreportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
