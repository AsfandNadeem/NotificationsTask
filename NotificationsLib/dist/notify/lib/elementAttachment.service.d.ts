import { ApplicationRef } from '@angular/core';
import { Injector } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ElementAttachmentService {
    private componentFactoryResolver;
    private appRef;
    private injector;
    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, injector: Injector);
    createComponentinDom(component: any): ComponentRef<any>;
    getElement(componentRef: ComponentRef<any>): HTMLElement;
    addChildtoElement(child: HTMLElement, parent?: HTMLElement): void;
    destroyElement(componentRef: ComponentRef<any>): void;
    static ɵfac: i0.ɵɵFactoryDef<ElementAttachmentService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ElementAttachmentService>;
}
//# sourceMappingURL=elementAttachment.service.d.ts.map