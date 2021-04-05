import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';


import {UserService} from "../../shared/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  private loginSub: Subscription;
  message = '';
  constructor(public userService: UserService, private router: Router) {
   this.loginSub = this.userService.getLoginErrors().subscribe(error => {
      this.message = error;
    });
  }

  ngOnInit(): void {
    if (this.userService.getIsAuth()) {
      this.router.navigate(['/homepage']);
    }
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.userService.login(form.value.email, form.value.password)
  }

  ngOnDestroy(){
    this.loginSub.unsubscribe();
  }


}
