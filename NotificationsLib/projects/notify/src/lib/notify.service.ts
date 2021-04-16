import { ComponentRef, Inject } from '@angular/core';
import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';

import { ElementAttachmentService } from './elementAttachment.service';
import { libconfig, LibConfigService } from './libconfig';
import { INotification } from './notification.interface';
import { NotifyContainerComponent } from './notify-container/notify-container.component';
import { NotifyComponent } from './notify.component';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private libConfig: libconfig;
  maxLimit = 0;
  countNotifications = 0;
  Queue = Array<INotification>();
  private _children: NotifyComponent[] = [];
  private NotifyContainerElement: HTMLElement;
  private NotifyContainerRef: ComponentRef<NotifyContainerComponent>;

  constructor(private elementService: ElementAttachmentService,
    private appRef: ApplicationRef, @Inject(LibConfigService) private config) {

    this.NotifyContainerRef = this.elementService.createComponentinDom(NotifyContainerComponent);
    this.NotifyContainerElement = this.elementService.getElement(this.NotifyContainerRef);
    this.elementService.addChildtoElement(this.NotifyContainerElement);
    this.libConfig = this.config;
    this.maxLimit = this.libConfig.maxLimit;
  }


  private appendComponentToContainer(header: string, message: string, type: string) {
    //Create Child Component
    const childComponentRef = this.elementService.createComponentinDom(NotifyComponent);
    //Get child Component
    const childElement = this.elementService.getElement(childComponentRef);

    this.defineComponentValues(childComponentRef,header,message,type);
    //Add child component to parent
    this.elementService.addChildtoElement(childElement, this.NotifyContainerElement);
    this._children.push(childComponentRef.instance);
    this.countNotifications++;

  
  }

  open(header, message, category) {
    if (this.countNotifications < this.maxLimit) {
      this.appendComponentToContainer(header, message, category);
    }
    else {
      this.Queue.push({ header: header, message: message, type: category });
    }
  }

  destroy(childComponentRef: ComponentRef<any>) {
    this.elementService.destroyElement(childComponentRef);
    if (this.countNotifications > 0) {
      this.countNotifications--;
      if (this.Queue.length >= 1) {
        this.appendComponentToContainer(this.Queue[0].header, this.Queue[0].message, this.Queue[0].type);
        this.Queue.shift();
      }
    }
  }


  destroyAll() {
    this.Queue = [];
    this._children.forEach(cmp => {
      cmp.onClose();
    });
    this._children = [];
    this.countNotifications = 0;
    
  }

  insertTimeOut(childComponentRef: ComponentRef<any>){
    childComponentRef.instance.progressrequired = true;
    childComponentRef.instance.progressTime = this.libConfig.timeOut;
    childComponentRef.instance.actualTime =  this.libConfig.timeOut;
  }


  defineComponentValues(childComponentRef: ComponentRef<any>, header, message, type)
  {
    childComponentRef.instance.header = header;
    childComponentRef.instance.message = message;
    childComponentRef.instance.type = type;
    const sub = childComponentRef.instance.destroy.subscribe(() => {
      sub.unsubscribe();
      this.destroy(childComponentRef);
    });

    if (this.libConfig.timeOutRequiredCategories.includes(type)) {  
      this.insertTimeOut(childComponentRef);
    }
  }

}
