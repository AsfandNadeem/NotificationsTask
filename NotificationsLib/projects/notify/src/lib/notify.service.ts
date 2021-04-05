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

  maxLimit = 1;
  Queue = Array<INotification>();
  private _children:ComponentRef<NotifyComponent>[] = [];

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


    
    const sub = childComponentRef.instance.destroy.subscribe(() => {
      sub.unsubscribe();
      this.destroy(childComponentRef);
    });
    //Add child component to parent
    this.elementService.addChildtoElement(childElement, this.NotifyContainerElement);
    this._children.push(childComponentRef);


    if (type == "info") {
      setTimeout(() => {
        if(childComponentRef)
        {this.destroy(childComponentRef);}
      }, 10000);
    }
  }

  open(header, message, category) {
    if (this.maxLimit <= 5) {
      this.appendComponentToContainer(header, message + this.maxLimit, category);
      this.maxLimit++;
    }
    else {
      this.Queue.push({header:header,message:message, type:category});
    }
  }

  destroy(childComponentRef: ComponentRef<any>) {
    this.elementService.destroyElement(childComponentRef);
    (this._children).splice((this._children).indexOf(childComponentRef), 1);
    if (this.maxLimit > 0) {
      this.maxLimit--;
      if (this.Queue.length >= 1) {
        this.appendComponentToContainer(this.Queue[0].header, this.Queue[0].message, this.Queue[0].type);
        this.Queue.shift();
      }
    }
  }


  destroyAll()
  {
    this._children.forEach(cmp=>cmp.destroy());
    this._children.splice(0,this._children.length);
  }





}
