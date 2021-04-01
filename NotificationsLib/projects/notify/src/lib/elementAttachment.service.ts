import { EmbeddedViewRef } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { Injector } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { ComponentFactoryResolver, Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class ElementAttachmentService {

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector) {

    }
    // 1. Create a Cotntainer component reference from the component 
    createComponentinDom(component: any): ComponentRef<any> {
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);

        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);
        return componentRef;
    }

    // 3. Get DOM element from component
    getElement(componentRef: ComponentRef<any>): HTMLElement {
        return (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;
    }

    // 4. Append DOM element to the body
    addChildtoElement(child: HTMLElement, parent: HTMLElement = document.body) {
        parent.appendChild(child);
    }

    //5 Destroy Element
    destroyElement(componentRef: ComponentRef<any>) {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
    }

}