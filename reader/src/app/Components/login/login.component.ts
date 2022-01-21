import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  username: string = '';
  password: string = '';
  LoginService: any;
  result: boolean = false;
  constructor(private router: Router, private fb: FormBuilder, public ls: LoginService) {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
   }

  ngOnInit(): void {
  }
  login(){
    console.log('clicked', this.loginForm);
    // this.ls.loginFacilitation(this.username, this.password).this.service.function
    //   .subscribe((arg: boolean) => this.result = arg);
    // console.log(this.result, 'result');

    if(this.loginForm.value.username == 'Test' && this.loginForm.value.password == 'test'){
      console.log('login successful');
      this.result = false;
    }else{
      this.result = true;
      console.log('login unsuccessful');
    }
  }

}
