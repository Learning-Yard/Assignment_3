import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as examlist from '../../assets/json/exams.json';

@Component({
  selector: 'app-student-exampage',
  templateUrl: './student-exampage.component.html',
  styleUrls: ['./student-exampage.component.scss']
})
export class StudentExampageComponent implements OnInit {

  questions:any[];
  answers:any[];
  marks=0;
  totalmarks=0;
  public current_data=[];
  examId:any;
  examDetail:any;
  ExamForm:FormGroup;

  constructor(private aroute:ActivatedRoute , private fb:FormBuilder) { }

  ngOnInit(): void {
    this.ExamForm = this.fb.group({
      ExamQuestions: this.fb.array([])
    })
    this.examId = this.aroute.snapshot.params["id"];
    this.examDetail = examlist.exam[this.examId];
    this.questions = examlist.exam[this.examId].ExamQuestions;
    console.log(this.questions);
    // this.addQuestion();
    this.editItem();
  }

 ExamQuestions():FormGroup{
  return this.fb.group({
    examQuestion:'',
    quesionOption:''
  })
}

get examQuestions() : FormArray {
  return this.ExamForm.get("ExamQuestions") as FormArray
}

addQuestion() {
  alert("Adding Questions");
  this.examQuestions.push(this.ExamQuestions());
}

editItem(){
  this.current_data = this.questions;
  console.log(this.current_data);
  // if(this.current_data["ExamQuestions"].length > this.examQuestions["controls"].length){
    for(let i=0 ; i<this.current_data.length; i++){
      // debugger
      this.examQuestions.push(this.ExamQuestions());
      this.totalmarks +=10;
      }
      let res = {ExamQuestions:this.current_data}
      this.ExamForm.patchValue(res);
      console.log(this.examQuestions);
  // }
}

  onSubmit() {
    this.marks = 0;
    this.answers = this.ExamForm.value.ExamQuestions;
    console.log(this.answers);
    for(let i=0;i<this.answers.length;i++){
      if(this.answers[i].quesionOption == this.questions[i].quesionCorrectOption){
        this.marks +=10;
      }else{
        this.marks +=0;
      }
    }
    console.log(this.marks);
  }
}
