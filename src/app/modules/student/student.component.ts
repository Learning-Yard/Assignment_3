import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as examlist from '../../assets/json/exams.json';
// import { StudentExamInfoComponent } from '../student-exam-info/student-exam-info.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  exams:any;
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.exams = examlist.exam;
  }

  ngOnchanges(){
    this.exams = examlist.exam;
  }

  OnClick(i){
    // this.route.navigate(["student-exam-info"],{examid:i});
    // this.sic.recievData(i);
    console.log(i);
  }

}
