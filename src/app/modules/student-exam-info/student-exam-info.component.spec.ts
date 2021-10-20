import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExamInfoComponent } from './student-exam-info.component';

describe('StudentExamInfoComponent', () => {
  let component: StudentExamInfoComponent;
  let fixture: ComponentFixture<StudentExamInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentExamInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentExamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
