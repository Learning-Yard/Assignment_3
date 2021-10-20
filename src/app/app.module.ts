import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { StudentComponent } from './modules/student/student.component';
import { TeacherComponent } from './modules/teacher/teacher.component';
import { NavbarComponent } from './modules/common/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentguardGuard } from './assets/service/guard/studentguard.guard';
import { TeacherguardGuard } from './assets/service/guard/teacherguard.guard';
import { ExamMakerComponent } from './modules/exam/exam-maker/exam-maker/exam-maker.component';
import { FormsModule } from '@angular/forms';
import { StudentExamInfoComponent } from './modules/student-exam-info/student-exam-info.component';
import { StudentExampageComponent } from './modules/student-exampage/student-exampage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    TeacherComponent,
    NavbarComponent,
    ExamMakerComponent,
    StudentExamInfoComponent,
    StudentExampageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [StudentguardGuard,TeacherguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
