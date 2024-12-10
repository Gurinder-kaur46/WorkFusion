import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectrequestsComponent } from './projectrequests.component';

describe('ProjectrequestsComponent', () => {
  let component: ProjectrequestsComponent;
  let fixture: ComponentFixture<ProjectrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectrequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
