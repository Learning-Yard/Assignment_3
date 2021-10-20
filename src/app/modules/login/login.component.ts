import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from 'src/app/assets/service/auth/auth.service';
import { LoginserviceService } from 'src/app/assets/service/loginservice/loginservice.service';
import * as cred from '../../assets/json/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  LoginForm = new FormGroup({
    Username: new FormControl((''),[Validators.required,Validators.pattern('[a-zA-Z\s]+')]),
    Password: new FormControl((''),[Validators.required,Validators.pattern('[a-zA-Z\s]+')]),
  });


  constructor( private login:LoginserviceService) { }
  usercreds:any;
  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.LoginForm.value);
    this.usercreds = cred;
    this.checkCredentials(this.LoginForm.value.Username,this.LoginForm.value.Password);
  }

  checkCredentials(_username,_password){
    // console.log(_username,_password);
    this.login.checkCredentials(_username,_password);
  }

}
