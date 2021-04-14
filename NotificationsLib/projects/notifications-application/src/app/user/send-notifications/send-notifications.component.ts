import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifyService } from 'notify';
import { Subscription } from 'rxjs';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-send-notifications',
  templateUrl: './send-notifications.component.html',
  styleUrls: ['./send-notifications.component.css']
})
export class SendNotificationsComponent implements OnInit {
  categories = ["info", "error", "warning"];
  categorySelected = "info";
  serverErrorMessages: string;

  constructor(private notify: NotifyService, private userService: UserService) { }

  ngOnInit(): void {

  }

  send(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.serverErrorMessages = '';
    this.userService.addNotification(form.value.header, form.value.body, form.value.category).subscribe(
      res => {
        this.notify.open(form.value.header, form.value.body, form.value.category);
        form.controls['header'].reset();
        form.controls['body'].reset();
        this.categories = ["info", "error", "warning"];
        this.categorySelected = "info";
      },
      err => {
        setTimeout(() => {
          this.serverErrorMessages = 'Something went wrong';
          this.userService.logout();
        }, 2000);
      }
    );

  }


}
