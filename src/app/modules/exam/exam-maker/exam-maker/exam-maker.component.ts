import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms';
import * as examlist from '../../../../assets/json/exams.json';

@Component({
  selector: 'app-exam-maker',
  templateUrl: './exam-maker.component.html',
  styleUrls: ['./exam-maker.component.scss']
})
export class ExamMakerComponent implements OnInit {

  exams:any;
  viewexam:any = [];
  qrf=0;
  public current_data=[];
  number=0;
  editmode:boolean = false;
  open_Modal: boolean;
  // dummyfakearray=[];

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.exams = examlist.exam;
    console.log(this.exams);
 }

 ExamForm:FormGroup = this.fb.group({
  examName:'',
  examDuration:'',
  ExamQuestions: this.fb.array([])
})

 ExamQuestions():FormGroup{
  return this.fb.group({
    examQuestion:'',
    quesionOption1:'',
    quesionOption2:'',
    quesionOption3:'',
    quesionOption4:'',
    quesionCorrectOption:''
  })
}

 get examQuestions() : FormArray {
  return this.ExamForm.get("ExamQuestions") as FormArray
}

 ngOnchanges(){
  this.exams = examlist.exam;
  console.log(this.exams);
 }

 public deleteItem(i: number) {
  if(confirm("Are you sure to delete this exam")) {
  console.log("Implement delete functionality here");
  this.exams.splice(i, 1);
  console.log(i);
  }
}

editItem(i:number){
  this.open_Modal = confirm("Are you sure you want to edit this exam");
  if(this.open_Modal) {
  let abc= document.getElementById('edit');
  abc.click();
  this.clear();
  this.current_data = this.exams[i];
  console.log(this.current_data);
  if(this.current_data["ExamQuestions"].length > this.examQuestions["controls"].length){
    for(let i=0 ; i<this.current_data["ExamQuestions"].length; i++){
      this.examQuestions.push(this.ExamQuestions());
      }
      this.ExamForm.patchValue(this.current_data);
  }
}
}

viewExam(i:number){
this.viewexam=[];
this.viewexam.push(this.exams[i]) ;
}

// noquestions(){
//   if(this.number<5){
//   this.number = this.number + 1;
//   for(let i=0;i<this.number;i++){
//     this.dummyfakearray[i]=i;
//   }
// }else{
//   alert("Maximum Number of Questions in an exam is 5");
//   this.number = this.number;
// }
//   console.log(this.number);
//   console.log(this.dummyfakearray);
// }

addQuestion() {
  this.examQuestions.push(this.ExamQuestions());
}

delQuestion() {
  this.qrf =1;
  this.examQuestions.removeAt(this.ExamQuestions[length-1]);
}

removeQuestion(i:number) {
  this.examQuestions.removeAt(i);
}

addtoExamAray(value:any){
  let length = this.exams.length;
  if(this.current_data.length == 0){
  this.exams[length] = value;
  }else{
    this.exams[length-1] = value;
  }
}

onSubmit() {
  this.addtoExamAray(this.ExamForm.value);
  console.log(this.ExamForm.value);
  this.clear();
}

clear(){
  this.ExamForm.reset();
  this.current_data = [];
  this.examQuestions.controls = [];
}

onCancel(){
  this.clear();
}

}
