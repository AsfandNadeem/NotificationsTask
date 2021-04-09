import { ComponentRef } from '@angular/core';
import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { ElementAttachmentService } from './elementAttachment.service';
import { INotification } from './notification.interface';
import { NotifyContainerComponent } from './notify-container/notify-container.component';
import { NotifyComponent } from './notify.component';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  maxLimit = 5;
  countNotifications = 0;
  Queue = Array<INotification>();
  private _children: ComponentRef<NotifyComponent>[] = [];
  private NotifyContainerElement: HTMLElement;
  private NotifyContainerRef: ComponentRef<NotifyContainerComponent>;

  constructor(private elementService: ElementAttachmentService,
    private appRef: ApplicationRef) {

    this.NotifyContainerRef = this.elementService.createComponentinDom(NotifyContainerComponent);
    this.NotifyContainerElement = this.elementService.getElement(this.NotifyContainerRef);
    this.elementService.addChildtoElement(this.NotifyContainerElement);
  }


  private appendComponentToContainer(header: string, message: string, type: string) {
    //Create Child Component
    const childComponentRef = this.elementService.createComponentinDom(NotifyComponent);
    //Get child Component
    const childElement = this.elementService.getElement(childComponentRef);

    childComponentRef.instance.header = header;

    childComponentRef.instance.message = message;

    childComponentRef.instance.type = type;

    childComponentRef.instance.exists = true;



    const sub = childComponentRef.instance.destroy.subscribe(() => {
      sub.unsubscribe();
      this.destroy(childComponentRef);
    });
    //Add child component to parent
    this.elementService.addChildtoElement(childElement, this.NotifyContainerElement);
    this._children.push(childComponentRef);
    this.countNotifications++;

    if (type == "info") {
      childComponentRef.instance.exists = true;
      childComponentRef.instance.progressrequired = true;
      childComponentRef.instance.progressTime = 10000;
      childComponentRef.instance.actualTime = 10000;    
      // setTimeout(() => {
      //   if (childComponentRef.instance.exists) {
      //     this.destroy(childComponentRef);
      //   }
      // }, 10500);
    }
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
    (this._children).splice((this._children).indexOf(childComponentRef), 1);
    
    if (childComponentRef.instance.exists) {
      childComponentRef.instance.exists = false;
    }
    if (this.countNotifications > 0) {
      this.countNotifications--;
      if (this.Queue.length >= 1) {
        this.appendComponentToContainer(this.Queue[0].header, this.Queue[0].message, this.Queue[0].type);
        this.Queue.shift();
      }
    }
  }


  destroyAll() {
    this._children.forEach(cmp => this.destroy(cmp));
    this._children.splice(0, this._children.length);
    this.countNotifications = 0;
    
  }





}
