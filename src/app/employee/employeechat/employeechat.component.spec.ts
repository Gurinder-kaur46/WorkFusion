import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeechatComponent } from './employeechat.component';

describe('EmployeechatComponent', () => {
  let component: EmployeechatComponent;
  let fixture: ComponentFixture<EmployeechatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeechatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeechatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
