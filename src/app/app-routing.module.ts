import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamMakerComponent } from './modules/exam/exam-maker/exam-maker/exam-maker.component';
import { StudentguardGuard } from './assets/service/guard/studentguard.guard';
import { TeacherguardGuard } from './assets/service/guard/teacherguard.guard';
import { LoginComponent } from './modules/login/login.component';
import { StudentComponent } from './modules/student/student.component';
import { TeacherComponent } from './modules/teacher/teacher.component';
import { StudentExamInfoComponent } from './modules/student-exam-info/student-exam-info.component';
import { StudentExampageComponent } from './modules/student-exampage/student-exampage.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
},
  {path:'login' ,component:LoginComponent},
  {path:'student' , canActivate : [StudentguardGuard] , component:StudentComponent},
  {path:'teacher' , canActivate : [TeacherguardGuard] , component:TeacherComponent},
  // {path:'student' ,  component:StudentComponent},
  // {path:'teacher' ,  component:TeacherComponent},
  {path:'exam-maker' , canActivate : [TeacherguardGuard] , component:ExamMakerComponent},
  {path:'student-exam-info/:id' , canActivate : [StudentguardGuard] ,  component:StudentExamInfoComponent},
  {path:'student-exampage/:id' , canActivate : [StudentguardGuard] , component:StudentExampageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
