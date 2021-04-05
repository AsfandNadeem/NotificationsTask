(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('notify', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.notify = {}, global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var _c0 = ["*"];
    var NotifyContainerComponent = /** @class */ (function () {
        function NotifyContainerComponent() {
        }
        NotifyContainerComponent.prototype.ngOnInit = function () {
        };
        return NotifyContainerComponent;
    }());
    NotifyContainerComponent.ɵfac = function NotifyContainerComponent_Factory(t) { return new (t || NotifyContainerComponent)(); };
    NotifyContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NotifyContainerComponent, selectors: [["lib-notify-container"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NotifyContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵprojection(0, 0, ["id", "parent"]);
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotifyContainerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-notify-container',
                        templateUrl: './notify-container.component.html',
                        styleUrls: ['./notify-container.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var NotifyComponent = /** @class */ (function () {
        // @HostBinding('class.redbackground') warning: boolean;
        function NotifyComponent(NotifyService, renderer) {
            this.NotifyService = NotifyService;
            this.renderer = renderer;
            this.type = '';
            this.destroy = new i0.EventEmitter();
        }
        NotifyComponent.prototype.ngOnInit = function () {
        };
        NotifyComponent.prototype.getBackground = function () {
            if (this.type === 'warning') {
                return 'orange';
            }
            else if (this.type == 'error') {
                return 'red';
            }
            else {
                return 'blue';
            }
        };
        NotifyComponent.prototype.onClose = function () {
            this.destroy.emit();
        };
        return NotifyComponent;
    }());
    NotifyComponent.ɵfac = function NotifyComponent_Factory(t) { return new (t || NotifyComponent)(i0.ɵɵdirectiveInject(NotifyService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    NotifyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NotifyComponent, selectors: [["lib-notify"]], inputs: { header: "header", message: "message", type: "type" }, outputs: { destroy: "destroy" }, decls: 12, vars: 4, consts: [[1, "card", "container", "my-4", "stack-top"], [1, "card-header", "container-fluid"], [1, "row"], [1, "col-10"], [1, "col-2"], ["type", "button", 3, "click"], [1, "card-body"], [1, "card-text"]], template: function NotifyComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵelementStart(4, "h3");
                i0.ɵɵtext(5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 4);
                i0.ɵɵelementStart(7, "a", 5);
                i0.ɵɵlistener("click", function NotifyComponent_Template_a_click_7_listener() { return ctx.onClose(); });
                i0.ɵɵtext(8, "X ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 6);
                i0.ɵɵelementStart(10, "p", 7);
                i0.ɵɵtext(11);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵstyleProp("background-color", ctx.getBackground());
                i0.ɵɵadvance(4);
                i0.ɵɵtextInterpolate(ctx.header);
                i0.ɵɵadvance(6);
                i0.ɵɵtextInterpolate(ctx.message);
            }
        }, styles: [".stack-top[_ngcontent-%COMP%]{text-align:center;padding:0;width:20%;box-shadow:0 10px 19px 10px rgba(0,0,0,.04);color:#000;top:\"0\";right:\"50%\";display:flex;transform:translate(195%,calc(100% - 940px));z-index:1}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotifyComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-notify',
                        templateUrl: './notify.component.html',
                        styleUrls: ['./notify.component.css'
                        ]
                    }]
            }], function () { return [{ type: NotifyService }, { type: i0.Renderer2 }]; }, { header: [{
                    type: i0.Input
                }], message: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], destroy: [{
                    type: i0.Output
                }] });
    })();

    var ElementAttachmentService = /** @class */ (function () {
        function ElementAttachmentService(componentFactoryResolver, appRef, injector) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.appRef = appRef;
            this.injector = injector;
        }
        // 1. Create a Cotntainer component reference from the component 
        ElementAttachmentService.prototype.createComponentinDom = function (component) {
            var componentRef = this.componentFactoryResolver
                .resolveComponentFactory(component)
                .create(this.injector);
            // 2. Attach component to the appRef so that it's inside the ng component tree
            this.appRef.attachView(componentRef.hostView);
            return componentRef;
        };
        // 3. Get DOM element from component
        ElementAttachmentService.prototype.getElement = function (componentRef) {
            return componentRef.hostView
                .rootNodes[0];
        };
        // 4. Append DOM element to the body
        ElementAttachmentService.prototype.addChildtoElement = function (child, parent) {
            if (parent === void 0) { parent = document.body; }
            parent.appendChild(child);
        };
        //5 Destroy Element
        ElementAttachmentService.prototype.destroyElement = function (componentRef) {
            this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        };
        return ElementAttachmentService;
    }());
    ElementAttachmentService.ɵfac = function ElementAttachmentService_Factory(t) { return new (t || ElementAttachmentService)(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.Injector)); };
    ElementAttachmentService.ɵprov = i0.ɵɵdefineInjectable({ token: ElementAttachmentService, factory: ElementAttachmentService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ElementAttachmentService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }]; }, null);
    })();

    var NotifyService = /** @class */ (function () {
        function NotifyService(elementService, appRef) {
            this.elementService = elementService;
            this.appRef = appRef;
            this.maxLimit = 5;
            this.countNotifications = 0;
            this.Queue = Array();
            this._children = [];
            this.NotifyContainerRef = this.elementService.createComponentinDom(NotifyContainerComponent);
            this.NotifyContainerElement = this.elementService.getElement(this.NotifyContainerRef);
            this.elementService.addChildtoElement(this.NotifyContainerElement);
        }
        NotifyService.prototype.appendComponentToContainer = function (header, message, type) {
            var _this = this;
            //Create Child Component
            var childComponentRef = this.elementService.createComponentinDom(NotifyComponent);
            //Get child Component
            var childElement = this.elementService.getElement(childComponentRef);
            childComponentRef.instance.header = header;
            childComponentRef.instance.message = message;
            childComponentRef.instance.type = type;
            var sub = childComponentRef.instance.destroy.subscribe(function () {
                sub.unsubscribe();
                _this.destroy(childComponentRef);
            });
            //Add child component to parent
            this.elementService.addChildtoElement(childElement, this.NotifyContainerElement);
            this._children.push(childComponentRef);
            this.countNotifications++;
            if (type == "info") {
                setTimeout(function () {
                    if (childComponentRef) {
                        _this.destroy(childComponentRef);
                    }
                }, 10000);
            }
        };
        NotifyService.prototype.open = function (header, message, category) {
            if (this.countNotifications < this.maxLimit) {
                this.appendComponentToContainer(header, message, category);
            }
            else {
                this.Queue.push({ header: header, message: message, type: category });
            }
        };
        NotifyService.prototype.destroy = function (childComponentRef) {
            this.elementService.destroyElement(childComponentRef);
            (this._children).splice((this._children).indexOf(childComponentRef), 1);
            if (this.countNotifications > 0) {
                this.countNotifications--;
                if (this.Queue.length >= 1) {
                    this.appendComponentToContainer(this.Queue[0].header, this.Queue[0].message, this.Queue[0].type);
                    this.Queue.shift();
                }
            }
        };
        NotifyService.prototype.destroyAll = function () {
            this._children.forEach(function (cmp) { return cmp.destroy(); });
            this._children.splice(0, this._children.length);
        };
        return NotifyService;
    }());
    NotifyService.ɵfac = function NotifyService_Factory(t) { return new (t || NotifyService)(i0.ɵɵinject(ElementAttachmentService), i0.ɵɵinject(i0.ApplicationRef)); };
    NotifyService.ɵprov = i0.ɵɵdefineInjectable({ token: NotifyService, factory: NotifyService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotifyService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: ElementAttachmentService }, { type: i0.ApplicationRef }]; }, null);
    })();

    var NotifyModule = /** @class */ (function () {
        function NotifyModule() {
        }
        return NotifyModule;
    }());
    NotifyModule.ɵfac = function NotifyModule_Factory(t) { return new (t || NotifyModule)(); };
    NotifyModule.ɵmod = i0.ɵɵdefineNgModule({ type: NotifyModule });
    NotifyModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[common.CommonModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NotifyModule, { declarations: [NotifyComponent, NotifyContainerComponent], imports: [common.CommonModule], exports: [NotifyComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotifyModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [NotifyComponent, NotifyContainerComponent],
                        imports: [common.CommonModule
                        ],
                        exports: [NotifyComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of notify
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NotifyComponent = NotifyComponent;
    exports.NotifyModule = NotifyModule;
    exports.NotifyService = NotifyService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=notify.umd.js.map
