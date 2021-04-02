import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NotifyService} from 'notify';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-send-notifications',
  templateUrl: './send-notifications.component.html',
  styleUrls: ['./send-notifications.component.css']
})
export class SendNotificationsComponent implements OnInit {
categories=["info","error","warning"];
categorySelected = "info";
serverErrorMessages: string;

  constructor(private notify: NotifyService, private userService: UserService) { }

  ngOnInit(): void {
  }

  send(form: NgForm)
  {
    this.serverErrorMessages = '';
    this.notify.open(form.value.header, form.value.body, form.value.category);
    this.userService.addNotification(form.value.header, form.value.body, form.value.category).subscribe(
      res => {
        form.reset();
        this.categorySelected = "info";
      },
      err => {
        setTimeout(() => {
          this.serverErrorMessages = 'Something went wrong';
        }, 2000);
      }
  );
    
  }

}
