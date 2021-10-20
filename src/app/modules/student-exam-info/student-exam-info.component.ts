import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as examlist from '../../assets/json/exams.json';
// import { StudentExampageComponent } from '../student-exampage/student-exampage.component';

@Component({
  selector: 'app-student-exam-info',
  templateUrl: './student-exam-info.component.html',
  styleUrls: ['./student-exam-info.component.scss']
})
export class StudentExamInfoComponent implements OnInit {

  examDetail:any;
  examID:any;
  constructor(private route:Router , private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.examID = this.aroute.snapshot.params["id"];
    this.recievData(this.examID);
  }

  recievData(i){
    this.examDetail = examlist.exam[i];
    console.log(this.examDetail);
    // this.sendData(i);
  }

  gotoExam(){
    this.route.navigate(['/student-exampage/'+this.examID]);
  }

  // sendData(i){
  //   this.xam.recieveIndex(i);
  // }

}
