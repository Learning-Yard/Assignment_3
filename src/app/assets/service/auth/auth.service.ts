import { Injectable } from '@angular/core';
import * as cred from '../../../assets/json/users.json';
// import { TeacherguardGuard } from '../guard/teacherguard.guard';
// import { StudentguardGuard } from '../guard/studentguard.guard';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(private tguard:TeacherguardGuard , private sguard:StudentguardGuard , private routes : Router) { }
  constructor(private routes : Router) { }
  username:string;
  role:string;
  // isLogout:boolean;
  checkCredentials(username,password){
    for (let a:number = 0; a<cred.data.length ; a++){
      if (username === cred.data[a].user && password === cred.data[a].pass){
        this.username = username;
        this.role = cred.data[a].role;
        // console.log(this.username);
      }
    }
    if(this.username === "teacher"){
      localStorage.setItem("username",this.username);
      // this.tguard.checkWhoamI(this.username);
      localStorage.setItem("role",this.role);
      // this.isLogout = false;
      this.routes.navigate(['/teacher']);
    }else if(this.username === "student"){
      localStorage.setItem("username",this.username);
      // this.sguard.checkWhoamI(this.username);
      localStorage.setItem("role",this.role);
      // this.isLogout = false;
      this.routes.navigate(['/student']);
    }else{
      alert("Unregistered user");
      // this.isLogout = true;
      this.routes.navigate(['/login']);
    }
  }
}
