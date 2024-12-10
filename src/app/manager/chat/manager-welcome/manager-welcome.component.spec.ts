import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerWelcomeComponent } from './manager-welcome.component';

describe('ManagerWelcomeComponent', () => {
  let component: ManagerWelcomeComponent;
  let fixture: ComponentFixture<ManagerWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerWelcomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
