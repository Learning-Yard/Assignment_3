import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})

export class TeacherComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }

  goto(){
    this.routes.navigate(['/exam-maker']);
  }

}
