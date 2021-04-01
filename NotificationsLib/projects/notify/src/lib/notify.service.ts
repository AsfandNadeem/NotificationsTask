import { ComponentRef } from '@angular/core';
import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { ElementAttachmentService } from './elementAttachment.service';
import { NotifyContainerComponent } from './notify-container/notify-container.component';
import { NotifyComponent } from './notify.component';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  maxLimit = 1;
  Queue = [];

  private NotifyContainerElement: HTMLElement;
  private NotifyContainerRef: ComponentRef<NotifyContainerComponent>;
  constructor(private elementService: ElementAttachmentService,
    private appRef: ApplicationRef) {

    this.NotifyContainerRef = this.elementService.createComponentinDom(NotifyContainerComponent);
    this.NotifyContainerElement = this.elementService.getElement(this.NotifyContainerRef);
    this.elementService.addChildtoElement(this.NotifyContainerElement);
  }


  private appendComponentToContainer(header:string, message: string, type: string) {
    //Create Child Component
    const childComponentRef = this.elementService.createComponentinDom(NotifyComponent);
    //Get child Component
    const childElement = this.elementService.getElement(childComponentRef);

    childComponentRef.instance.header = header;

    childComponentRef.instance.message = message;

    childComponentRef.instance.type = type;



    const sub = childComponentRef.instance.destroy.subscribe(() => {
      sub.unsubscribe();
      this.destroy(childComponentRef, type);
    });
    //Add child component to parent
    this.elementService.addChildtoElement(childElement, this.NotifyContainerElement);


    // setTimeout(() => {
    //   this.destroy(childComponentRef, type);
    // }, 5000);
  }

  open(header, message, category) {
    if (this.maxLimit <= 5) {
      this.appendComponentToContainer(header, message + this.maxLimit, category);
      this.maxLimit++;
      console.log(this.maxLimit);
    }
    else {
      this.Queue.push(message);
    }
  }

  destroy(childComponentRef: ComponentRef<any>, type: string) {
    this.elementService.destroyElement(childComponentRef);
    if (this.maxLimit > 0) {
      this.maxLimit--;
      console.log(this.maxLimit);
      if (this.Queue.length >= 1) {
        this.appendComponentToContainer('Header', this.Queue.shift() + ' ' + this.maxLimit + ' ' + this.Queue.length, type);
      }
    }
  }





}
