import { HostBinding, Input } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NotifyService } from './notify.service';
@Component({
  selector: 'lib-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css'
  ]
})
export class NotifyComponent implements OnInit {
  @Input() header: string;
  @Input() message: string;
  @Input() type = '';
  @Output() destroy: EventEmitter<any> = new EventEmitter();
  
  // @HostBinding('class.redbackground') warning: boolean;
  constructor(private NotifyService: NotifyService,public renderer: Renderer2) {

  }

  ngOnInit(): void {

  }

  getBackground(): string {
    if (this.type === 'warning') {
      return 'orange';
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
}
