import { AfterViewInit, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';
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
export class NotifyComponent implements OnInit, AfterViewInit {
  @Input() header: string;
  @Input() message: string;
  @Input() type = '';
  @Input() progressrequired = false;
  @Input() progressTime = 0;
  @Input() actualTime = 0;
  @Output() destroy: EventEmitter<any> = new EventEmitter();
  mySubscription: Subscription;
  @ViewChild('progressDiv') divCurtain: ElementRef;
  setWidth = 0;

  // @HostBinding('class.redbackground') warning: boolean;
  constructor(private NotifyService: NotifyService, public renderer: Renderer2) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.progressrequired) {
      this.setWidth = ((this.actualTime / this.progressTime) * 100);
      this.mySubscription = interval(100).subscribe((x => {
        this.getProgress();
      }));
    }

  }

  getBackground(): string {
    if (this.type === 'warning') {
      return 'darkorange';
    }
    else if (this.type == 'error') {
      return 'red'
    }
    else {
      return 'blue';
    }
  }

  onClose(): void {
    this.destroy.emit();
  }

  getProgress() {
    if (this.actualTime > 0) {
      this.actualTime = this.actualTime - 100;
      this.setWidth = ((this.actualTime / this.progressTime) * 100);
      
      // this.divCurtain.nativeElement.style.width = (this.actualTime / this.progressTime).toString() + '%';
    }
    else {
      this.mySubscription.unsubscribe();
    }
  }
}
