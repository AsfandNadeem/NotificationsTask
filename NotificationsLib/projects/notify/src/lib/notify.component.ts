import { AfterContentInit, AfterViewInit, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import 'rxjs/add/observable/interval';
import { NotifyService } from './notify.service';
@Component({
  selector: 'lib-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css'
  ]
})
export class NotifyComponent implements OnInit, AfterContentInit {
  @Input() header: string;
  @Input() message: string;
  @Input() type = '';
  @Input() progressrequired = false;
  @Input() progressTime = 0;
  @Input() actualTime = 0;
  @Output() destroy: EventEmitter<any> = new EventEmitter();
  mySubscription: Subscription;
  myVar;
  setWidth = 0;
  constructor(private NotifyService: NotifyService, public renderer: Renderer2) {

  }

  ngOnInit(): void {
    if (this.type == "info"){
    this.myVar = setTimeout(() => {
        this.onClose();
    }, this.progressTime + 500);
  }
  }

  ngAfterContentInit() {
    if (this.progressrequired) {
      this.setWidth = ((this.actualTime / this.progressTime) * 100);
      this.mySubscription = interval(100).subscribe((x => {
        this.setProgress();
      }));
    }

  }
  

  onClose(): void {
    if (this.progressrequired) {
    this.mySubscription.unsubscribe();
    clearTimeout(this.myVar);
    }
    this.destroy.emit();
  }

  setProgress() {
    if (this.actualTime > 0) {
      this.actualTime = this.actualTime - ((this.progressTime)/100);
      this.setWidth = ((this.actualTime / this.progressTime) * 100);
    }
    else {
      this.mySubscription.unsubscribe();
    }
  }
}
