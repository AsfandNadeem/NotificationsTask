import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotifyComponent } from './notify.component';
import { NotifyContainerComponent } from './notify-container/notify-container.component';



@NgModule({
  declarations: [NotifyComponent, NotifyContainerComponent],
  imports: [CommonModule
  ],
  exports: [NotifyComponent]
})
export class NotifyModule { }
