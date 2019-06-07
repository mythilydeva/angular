import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginError:any;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UsersService,
              private route: Router) { 
    
  }

  login(formvalues){
    var username = formvalues.username
    var passwd = formvalues.password
    this.userService.login(username, passwd)
    .then(res => {
      if(res['token'] != undefined){
        this.loginError = ""
        this.route.navigate(['/dashboard'])
      }
      else{
        this.loginError = "Username or Password is not valid"
      }
    })


  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      'username' : [''],
      'password' : ['']
    })
  }
  
  

}
