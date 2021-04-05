import { ɵɵdefineComponent, ɵɵprojectionDef, ɵɵprojection, ɵsetClassMetadata, Component, EventEmitter, ɵɵdirectiveInject, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵadvance, ɵɵstyleProp, ɵɵtextInterpolate, Input, Output, ɵɵinject, ComponentFactoryResolver, ApplicationRef, Injector, ɵɵdefineInjectable, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const _c0 = ["*"];
class NotifyContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotifyContainerComponent.ɵfac = function NotifyContainerComponent_Factory(t) { return new (t || NotifyContainerComponent)(); };
NotifyContainerComponent.ɵcmp = ɵɵdefineComponent({ type: NotifyContainerComponent, selectors: [["lib-notify-container"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NotifyContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0, 0, ["id", "parent"]);
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NotifyContainerComponent, [{
        type: Component,
        args: [{
                selector: 'lib-notify-container',
                templateUrl: './notify-container.component.html',
                styleUrls: ['./notify-container.component.css']
            }]
    }], function () { return []; }, null); })();

class NotifyComponent {
    // @HostBinding('class.redbackground') warning: boolean;
    constructor(NotifyService) {
        this.NotifyService = NotifyService;
        this.type = '';
        this.destroy = new EventEmitter();
    }
    ngOnInit() {
    }
    // isWarning(): boolean {
    //   if (this.type === 'warning') {
    //     return true;
    //   }
    //   else {
    //     return false;
    //   }
    // }
    getBackground() {
        if (this.type === 'warning') {
            return 'orange';
        }
        else if (this.type == 'error') {
            return 'red';
        }
        else {
            return 'blue';
        }
    }
    onClose() {
        this.destroy.emit();
    }
}
NotifyComponent.ɵfac = function NotifyComponent_Factory(t) { return new (t || NotifyComponent)(ɵɵdirectiveInject(NotifyService)); };
NotifyComponent.ɵcmp = ɵɵdefineComponent({ type: NotifyComponent, selectors: [["lib-notify"]], inputs: { header: "header", message: "message", type: "type" }, outputs: { destroy: "destroy" }, decls: 12, vars: 4, consts: [[1, "card", "container", "my-4", "stack-top"], [1, "card-header", "container-fluid"], [1, "row"], [1, "col"], ["type", "button", 3, "click"], [1, "card-body"], [1, "card-text"]], template: function NotifyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "h3");
        ɵɵtext(5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 3);
        ɵɵelementStart(7, "a", 4);
        ɵɵlistener("click", function NotifyComponent_Template_a_click_7_listener() { return ctx.onClose(); });
        ɵɵtext(8, "X ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 5);
        ɵɵelementStart(10, "p", 6);
        ɵɵtext(11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵstyleProp("background-color", ctx.getBackground());
        ɵɵadvance(4);
        ɵɵtextInterpolate(ctx.header);
        ɵɵadvance(6);
        ɵɵtextInterpolate(ctx.message);
    } }, styles: [".stack-top[_ngcontent-%COMP%]{top:0;right:50%;transform:translate(50%,calc(0% + 20px));position:absolute;display:flex;opacity:1;box-shadow:0 10px 19px 10px rgb(0 0 0/4%);border-radius:4px;background-color:#fff;font-family:Raleway,Arial,sans-serif;transition:.2s cubic-bezier(.75,0,.75,.9);z-index:1}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NotifyComponent, [{
        type: Component,
        args: [{
                selector: 'lib-notify',
                templateUrl: './notify.component.html',
                styleUrls: ['./notify.component.css'
                ]
            }]
    }], function () { return [{ type: NotifyService }]; }, { header: [{
            type: Input
        }], message: [{
            type: Input
        }], type: [{
            type: Input
        }], destroy: [{
            type: Output
        }] }); })();

class ElementAttachmentService {
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    // 1. Create a Cotntainer component reference from the component 
    createComponentinDom(component) {
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);
        return componentRef;
    }
    // 3. Get DOM element from component
    getElement(componentRef) {
        return componentRef.hostView
            .rootNodes[0];
    }
    // 4. Append DOM element to the body
    addChildtoElement(child, parent = document.body) {
        parent.appendChild(child);
    }
    //5 Destroy Element
    destroyElement(componentRef) {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
    }
}
ElementAttachmentService.ɵfac = function ElementAttachmentService_Factory(t) { return new (t || ElementAttachmentService)(ɵɵinject(ComponentFactoryResolver), ɵɵinject(ApplicationRef), ɵɵinject(Injector)); };
ElementAttachmentService.ɵprov = ɵɵdefineInjectable({ token: ElementAttachmentService, factory: ElementAttachmentService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ElementAttachmentService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ComponentFactoryResolver }, { type: ApplicationRef }, { type: Injector }]; }, null); })();

class NotifyService {
    constructor(elementService, appRef) {
        this.elementService = elementService;
        this.appRef = appRef;
        this.maxLimit = 1;
        this.Queue = Array();
        this._children = [];
        this.NotifyContainerRef = this.elementService.createComponentinDom(NotifyContainerComponent);
        this.NotifyContainerElement = this.elementService.getElement(this.NotifyContainerRef);
        this.elementService.addChildtoElement(this.NotifyContainerElement);
    }
    appendComponentToContainer(header, message, type) {
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
                if (childComponentRef) {
                    this.destroy(childComponentRef);
                }
            }, 10000);
        }
    }
    open(header, message, category) {
        if (this.maxLimit <= 5) {
            this.appendComponentToContainer(header, message + this.maxLimit, category);
            this.maxLimit++;
        }
        else {
            this.Queue.push({ header: header, message: message, type: category });
        }
    }
    destroy(childComponentRef) {
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
    destroyAll() {
        this._children.forEach(cmp => cmp.destroy());
        this._children.splice(0, this._children.length);
    }
}
NotifyService.ɵfac = function NotifyService_Factory(t) { return new (t || NotifyService)(ɵɵinject(ElementAttachmentService), ɵɵinject(ApplicationRef)); };
NotifyService.ɵprov = ɵɵdefineInjectable({ token: NotifyService, factory: NotifyService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NotifyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ElementAttachmentService }, { type: ApplicationRef }]; }, null); })();

class NotifyModule {
}
NotifyModule.ɵfac = function NotifyModule_Factory(t) { return new (t || NotifyModule)(); };
NotifyModule.ɵmod = ɵɵdefineNgModule({ type: NotifyModule });
NotifyModule.ɵinj = ɵɵdefineInjector({ imports: [[CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NotifyModule, { declarations: [NotifyComponent, NotifyContainerComponent], imports: [CommonModule], exports: [NotifyComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NotifyModule, [{
        type: NgModule,
        args: [{
                declarations: [NotifyComponent, NotifyContainerComponent],
                imports: [CommonModule
                ],
                exports: [NotifyComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of notify
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NotifyComponent, NotifyModule, NotifyService };
//# sourceMappingURL=notify.js.map
