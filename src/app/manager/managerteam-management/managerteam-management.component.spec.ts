import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerteamManagementComponent } from './managerteam-management.component';

describe('ManagerteamManagementComponent', () => {
  let component: ManagerteamManagementComponent;
  let fixture: ComponentFixture<ManagerteamManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerteamManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerteamManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
