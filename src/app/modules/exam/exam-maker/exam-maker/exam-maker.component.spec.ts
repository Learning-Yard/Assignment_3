import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamMakerComponent } from './exam-maker.component';

describe('ExamMakerComponent', () => {
  let component: ExamMakerComponent;
  let fixture: ComponentFixture<ExamMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
