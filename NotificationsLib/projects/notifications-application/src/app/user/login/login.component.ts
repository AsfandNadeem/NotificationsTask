import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';


import {UserService} from "../../shared/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  message = '';
  constructor(public userService: UserService, private router: Router) {
    this.userService.getLoginErrors().subscribe(error => {
      this.message = error;
    });
  }

  ngOnInit(): void {
    if (this.userService.getIsAuth()) {
      this.router.navigate(['/homepage']);
    }
  }

  onLogin(form: NgForm) {
    console.log(form.value.email + '' + form.value.password);
    if (form.invalid) {
      return;
    }
    this.userService.login(form.value.email, form.value.password)
  }


}
