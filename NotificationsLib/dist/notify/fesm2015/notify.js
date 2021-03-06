import { __awaiter } from 'tslib';
import { InjectionToken, ɵɵdefineComponent, ɵɵprojectionDef, ɵɵprojection, ɵsetClassMetadata, Component, ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵnextContext, ɵɵadvance, ɵɵstyleProp, ɵɵproperty, ɵɵpureFunction2, EventEmitter, ɵɵdirectiveInject, ɵɵtext, ɵɵlistener, ɵɵtemplate, ɵɵtextInterpolate, Input, Output, ɵɵinject, ComponentFactoryResolver, ApplicationRef, Injector, ɵɵdefineInjectable, Injectable, Inject, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { interval } from 'rxjs';
import 'rxjs/add/observable/interval';
import { NgClass, NgIf, CommonModule } from '@angular/common';

const LibConfigService = new InjectionToken('libconfig');

const _c0 = ["*"];
class NotifyContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotifyContainerComponent.ɵfac = function NotifyContainerComponent_Factory(t) { return new (t || NotifyContainerComponent)(); };
NotifyContainerComponent.ɵcmp = ɵɵdefineComponent({ type: NotifyContainerComponent, selectors: [["lib-notify-container"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NotifyContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, styles: ["[_nghost-%COMP%]{position:absolute;margin-top:1%;right:2%;width:16%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NotifyContainerComponent, [{
        type: Component,
        args: [{
                selector: 'lib-notify-container',
                templateUrl: './notify-container.component.html',
                styleUrls: ['./notify-container.component.css']
            }]
    }], function () { return []; }, null); })();

const _c0$1 = function (a0, a1) { return { "bg-warning": a0, "bg-danger": a1 }; };
function NotifyComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵelement(1, "div", 10, 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵstyleProp("width", ctx_r0.setWidth, "%");
    ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c0$1, ctx_r0.type === "warning", ctx_r0.type === "error"));
} }
class NotifyComponent {
    constructor(NotifyService) {
        this.NotifyService = NotifyService;
        this.type = '';
        this.progressrequired = false;
        this.progressTime = 0;
        this.actualTime = 0;
        this.destroy = new EventEmitter();
        this.setWidth = 0;
    }
    ngOnInit() {
        if (this.progressrequired) {
            this.myVar = setTimeout(() => {
                this.onClose();
            }, this.progressTime + 500);
        }
    }
    ngAfterContentInit() {
        if (this.progressrequired) {
            this.setWidthMethod();
            this.mySubscription = interval(100).subscribe((x => {
                this.setProgress();
            }));
        }
    }
    onClose() {
        if (this.progressrequired) {
            this.mySubscription.unsubscribe();
            clearTimeout(this.myVar);
        }
        this.destroy.emit();
    }
    setProgress() {
        if (this.actualTime > 0) {
            this.actualTime = this.actualTime - ((this.progressTime) / 100);
            this.setWidthMethod();
        }
        else {
            this.mySubscription.unsubscribe();
        }
    }
    setWidthMethod() {
        this.setWidth = ((this.actualTime / this.progressTime) * 100);
    }
}
NotifyComponent.ɵfac = function NotifyComponent_Factory(t) { return new (t || NotifyComponent)(ɵɵdirectiveInject(NotifyService)); };
NotifyComponent.ɵcmp = ɵɵdefineComponent({ type: NotifyComponent, selectors: [["lib-notify"]], inputs: { header: "header", message: "message", type: "type", progressrequired: "progressrequired", progressTime: "progressTime", actualTime: "actualTime" }, outputs: { destroy: "destroy" }, decls: 13, vars: 4, consts: [[1, "card", "container", "my-4", "stack-top"], [1, "card-header", "container-fluid", 3, "ngClass"], [1, "row"], [1, "col-10"], [1, "col-2"], ["type", "button", 3, "click"], [1, "card-body"], [1, "card-text"], ["class", "progress", 4, "ngIf"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "active", 3, "ngClass"], ["progressDiv", ""]], template: function NotifyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "h3");
        ɵɵtext(5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 4);
        ɵɵelementStart(7, "a", 5);
        ɵɵlistener("click", function NotifyComponent_Template_a_click_7_listener() { return ctx.onClose(); });
        ɵɵtext(8, "X ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 6);
        ɵɵelementStart(10, "p", 7);
        ɵɵtext(11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(12, NotifyComponent_div_12_Template, 3, 6, "div", 8);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ctx.type);
        ɵɵadvance(4);
        ɵɵtextInterpolate(ctx.header);
        ɵɵadvance(6);
        ɵɵtextInterpolate(ctx.message);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.progressrequired);
    } }, directives: [NgClass, NgIf], styles: [".stack-top[_ngcontent-%COMP%]{padding:0;border:none;box-shadow:0 10px 19px 10px rgba(0,0,0,.04);color:#000;display:flex;z-index:1}.info[_ngcontent-%COMP%]{background-color:#00f}.warning[_ngcontent-%COMP%]{background-color:#ff8c00}.error[_ngcontent-%COMP%]{background-color:red}.card-body[_ngcontent-%COMP%]{text-align:center}"] });
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
        }], progressrequired: [{
            type: Input
        }], progressTime: [{
            type: Input
        }], actualTime: [{
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
    constructor(elementService, appRef, config) {
        this.elementService = elementService;
        this.appRef = appRef;
        this.config = config;
        this.maxLimit = 0;
        this.countNotifications = 0;
        this.Queue = Array();
        this._children = [];
        this.NotifyContainerRef = this.elementService.createComponentinDom(NotifyContainerComponent);
        this.NotifyContainerElement = this.elementService.getElement(this.NotifyContainerRef);
        this.elementService.addChildtoElement(this.NotifyContainerElement);
        this.libConfig = this.config;
        this.maxLimit = this.libConfig.maxLimit;
    }
    appendComponentToContainer(header, message, type) {
        //Create Child Component
        const childComponentRef = this.elementService.createComponentinDom(NotifyComponent);
        //Get child Component
        const childElement = this.elementService.getElement(childComponentRef);
        this.defineComponentValues(childComponentRef, header, message, type);
        //Add child component to parent
        this.elementService.addChildtoElement(childElement, this.NotifyContainerElement);
        this._children.push(childComponentRef.instance);
        this.countNotifications++;
    }
    open(header, message, category) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.countNotifications >= this.maxLimit) {
                yield this.groupOlder();
            }
            this.appendComponentToContainer(header, message, category);
        });
    }
    destroy(childComponentRef) {
        this.elementService.destroyElement(childComponentRef);
        if (this.countNotifications > 0) {
            this.countNotifications--;
            // if (this.Queue.length >= 1) {
            //   this.appendComponentToContainer(this.Queue[0].header, this.Queue[0].message, this.Queue[0].type);
            //   this.Queue.shift();
            // }
        }
    }
    groupOlder() {
        this.Queue.push({ header: this._children[0].header, message: this._children[0].message, type: this._children[0].type });
        this._children[0].onClose();
        this._children.shift();
    }
    destroyAll() {
        this.Queue = [];
        this._children.forEach(cmp => {
            cmp.onClose();
        });
        this._children = [];
        this.countNotifications = 0;
    }
    insertTimeOut(childComponentRef) {
        childComponentRef.instance.progressrequired = true;
        childComponentRef.instance.progressTime = this.libConfig.timeOut;
        childComponentRef.instance.actualTime = this.libConfig.timeOut;
    }
    defineComponentValues(childComponentRef, header, message, type) {
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
NotifyService.ɵfac = function NotifyService_Factory(t) { return new (t || NotifyService)(ɵɵinject(ElementAttachmentService), ɵɵinject(ApplicationRef), ɵɵinject(LibConfigService)); };
NotifyService.ɵprov = ɵɵdefineInjectable({ token: NotifyService, factory: NotifyService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NotifyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ElementAttachmentService }, { type: ApplicationRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [LibConfigService]
            }] }]; }, null); })();

class NotifyModule {
    static forRoot(config) {
        return {
            ngModule: NotifyModule,
            providers: [
                {
                    provide: LibConfigService,
                    useValue: config
                }
            ]
        };
    }
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
                // providers: [ { provide: APP_CONFIG, useValue: AppConfig }]
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
