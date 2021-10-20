import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExampageComponent } from './student-exampage.component';

describe('StudentExampageComponent', () => {
  let component: StudentExampageComponent;
  let fixture: ComponentFixture<StudentExampageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentExampageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentExampageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
