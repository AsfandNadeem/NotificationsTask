import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NotifyService} from 'notify';

@Component({
  selector: 'app-send-notifications',
  templateUrl: './send-notifications.component.html',
  styleUrls: ['./send-notifications.component.css']
})
export class SendNotificationsComponent implements OnInit {
categories=["info","error","warning"];
categorySelected = "info";

  constructor(private notify: NotifyService) { }

  ngOnInit(): void {
  }

  send(form: NgForm)
  {
    this.notify.open(form.value.header, form.value.body, form.value.category);
    form.reset();
    // this.categorySelected = "info";
  }

}
