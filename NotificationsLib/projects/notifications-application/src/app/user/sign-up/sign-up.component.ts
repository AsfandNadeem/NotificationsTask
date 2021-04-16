import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from "../../shared/user.service";
import { Router } from "@angular/router";
import {Store} from "@ngrx/store";
import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../../shared/auth-store/auth-actions';
import { from } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers : [UserService]
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(public userService: UserService, 
    private router: Router,
    private store: Store<fromApp.Appstate>) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    // this.store.dispatch(new AuthActions.TrySignup({username: form.value.email
    // , password: form.value.password}));
    this.userService.postUser(form.value).subscribe(
      res => {
        this.store.dispatch(new AuthActions.Signup());
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 2);
        this.router.navigate(['/login']).then();
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.message;
        }
        else
          this.serverErrorMessages = err.error.message;
      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      fullName: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}

