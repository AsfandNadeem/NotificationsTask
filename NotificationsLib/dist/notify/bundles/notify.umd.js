(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/add/observable/interval'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('notify', ['exports', '@angular/core', 'rxjs', 'rxjs/add/observable/interval', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.notify = {}, global.ng.core, global.rxjs, global.rxjs['add/observable/interval'], global.ng.common));
}(this, (function (exports, i0, rxjs, interval, i2) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var LibConfigService = new i0.InjectionToken('libconfig');

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
                i0.ɵɵprojection(0);
            }
        }, styles: ["[_nghost-%COMP%]{position:absolute;margin-top:1%;right:2%;width:16%}"] });
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

    var _c0$1 = function (a0, a1) { return { "bg-warning": a0, "bg-danger": a1 }; };
    function NotifyComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 9);
            i0.ɵɵelement(1, "div", 10, 11);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("width", ctx_r0.setWidth, "%");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c0$1, ctx_r0.type === "warning", ctx_r0.type === "error"));
        }
    }
    var NotifyComponent = /** @class */ (function () {
        function NotifyComponent(NotifyService) {
            this.NotifyService = NotifyService;
            this.type = '';
            this.progressrequired = false;
            this.progressTime = 0;
            this.actualTime = 0;
            this.destroy = new i0.EventEmitter();
            this.setWidth = 0;
        }
        NotifyComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.progressrequired) {
                this.myVar = setTimeout(function () {
                    _this.onClose();
                }, this.progressTime + 500);
            }
        };
        NotifyComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (this.progressrequired) {
                this.setWidthMethod();
                this.mySubscription = rxjs.interval(100).subscribe((function (x) {
                    _this.setProgress();
                }));
            }
        };
        NotifyComponent.prototype.onClose = function () {
            if (this.progressrequired) {
                this.mySubscription.unsubscribe();
                clearTimeout(this.myVar);
            }
            this.destroy.emit();
        };
        NotifyComponent.prototype.setProgress = function () {
            if (this.actualTime > 0) {
                this.actualTime = this.actualTime - ((this.progressTime) / 100);
                this.setWidthMethod();
            }
            else {
                this.mySubscription.unsubscribe();
            }
        };
        NotifyComponent.prototype.setWidthMethod = function () {
            this.setWidth = ((this.actualTime / this.progressTime) * 100);
        };
        return NotifyComponent;
    }());
    NotifyComponent.ɵfac = function NotifyComponent_Factory(t) { return new (t || NotifyComponent)(i0.ɵɵdirectiveInject(NotifyService)); };
    NotifyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NotifyComponent, selectors: [["lib-notify"]], inputs: { header: "header", message: "message", type: "type", progressrequired: "progressrequired", progressTime: "progressTime", actualTime: "actualTime" }, outputs: { destroy: "destroy" }, decls: 13, vars: 4, consts: [[1, "card", "container", "my-4", "stack-top"], [1, "card-header", "container-fluid", 3, "ngClass"], [1, "row"], [1, "col-10"], [1, "col-2"], ["type", "button", 3, "click"], [1, "card-body"], [1, "card-text"], ["class", "progress", 4, "ngIf"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "active", 3, "ngClass"], ["progressDiv", ""]], template: function NotifyComponent_Template(rf, ctx) {
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
                i0.ɵɵtemplate(12, NotifyComponent_div_12_Template, 3, 6, "div", 8);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngClass", ctx.type);
                i0.ɵɵadvance(4);
                i0.ɵɵtextInterpolate(ctx.header);
                i0.ɵɵadvance(6);
                i0.ɵɵtextInterpolate(ctx.message);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.progressrequired);
            }
        }, directives: [i2.NgClass, i2.NgIf], styles: [".stack-top[_ngcontent-%COMP%]{padding:0;border:none;box-shadow:0 10px 19px 10px rgba(0,0,0,.04);color:#000;display:flex;z-index:1}.info[_ngcontent-%COMP%]{background-color:#00f}.warning[_ngcontent-%COMP%]{background-color:#ff8c00}.error[_ngcontent-%COMP%]{background-color:red}.card-body[_ngcontent-%COMP%]{text-align:center}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotifyComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-notify',
                        templateUrl: './notify.component.html',
                        styleUrls: ['./notify.component.css'
                        ]
                    }]
            }], function () { return [{ type: NotifyService }]; }, { header: [{
                    type: i0.Input
                }], message: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], progressrequired: [{
                    type: i0.Input
                }], progressTime: [{
                    type: i0.Input
                }], actualTime: [{
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
        function NotifyService(elementService, appRef, config) {
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
        NotifyService.prototype.appendComponentToContainer = function (header, message, type) {
            //Create Child Component
            var childComponentRef = this.elementService.createComponentinDom(NotifyComponent);
            //Get child Component
            var childElement = this.elementService.getElement(childComponentRef);
            this.defineComponentValues(childComponentRef, header, message, type);
            //Add child component to parent
            this.elementService.addChildtoElement(childElement, this.NotifyContainerElement);
            this._children.push(childComponentRef.instance);
            this.countNotifications++;
        };
        NotifyService.prototype.open = function (header, message, category) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.countNotifications >= this.maxLimit)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.groupOlder()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            this.appendComponentToContainer(header, message, category);
                            return [2 /*return*/];
                    }
                });
            });
        };
        NotifyService.prototype.destroy = function (childComponentRef) {
            this.elementService.destroyElement(childComponentRef);
            if (this.countNotifications > 0) {
                this.countNotifications--;
                // if (this.Queue.length >= 1) {
                //   this.appendComponentToContainer(this.Queue[0].header, this.Queue[0].message, this.Queue[0].type);
                //   this.Queue.shift();
                // }
            }
        };
        NotifyService.prototype.groupOlder = function () {
            this.Queue.push({ header: this._children[0].header, message: this._children[0].message, type: this._children[0].type });
            this._children[0].onClose();
            this._children.shift();
        };
        NotifyService.prototype.destroyAll = function () {
            this.Queue = [];
            this._children.forEach(function (cmp) {
                cmp.onClose();
            });
            this._children = [];
            this.countNotifications = 0;
        };
        NotifyService.prototype.insertTimeOut = function (childComponentRef) {
            childComponentRef.instance.progressrequired = true;
            childComponentRef.instance.progressTime = this.libConfig.timeOut;
            childComponentRef.instance.actualTime = this.libConfig.timeOut;
        };
        NotifyService.prototype.defineComponentValues = function (childComponentRef, header, message, type) {
            var _this = this;
            childComponentRef.instance.header = header;
            childComponentRef.instance.message = message;
            childComponentRef.instance.type = type;
            var sub = childComponentRef.instance.destroy.subscribe(function () {
                sub.unsubscribe();
                _this.destroy(childComponentRef);
            });
            if (this.libConfig.timeOutRequiredCategories.includes(type)) {
                this.insertTimeOut(childComponentRef);
            }
        };
        return NotifyService;
    }());
    NotifyService.ɵfac = function NotifyService_Factory(t) { return new (t || NotifyService)(i0.ɵɵinject(ElementAttachmentService), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(LibConfigService)); };
    NotifyService.ɵprov = i0.ɵɵdefineInjectable({ token: NotifyService, factory: NotifyService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotifyService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: ElementAttachmentService }, { type: i0.ApplicationRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [LibConfigService]
                        }] }];
        }, null);
    })();

    var NotifyModule = /** @class */ (function () {
        function NotifyModule() {
        }
        NotifyModule.forRoot = function (config) {
            return {
                ngModule: NotifyModule,
                providers: [
                    {
                        provide: LibConfigService,
                        useValue: config
                    }
                ]
            };
        };
        return NotifyModule;
    }());
    NotifyModule.ɵfac = function NotifyModule_Factory(t) { return new (t || NotifyModule)(); };
    NotifyModule.ɵmod = i0.ɵɵdefineNgModule({ type: NotifyModule });
    NotifyModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[i2.CommonModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NotifyModule, { declarations: [NotifyComponent, NotifyContainerComponent], imports: [i2.CommonModule], exports: [NotifyComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotifyModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [NotifyComponent, NotifyContainerComponent],
                        imports: [i2.CommonModule
                        ],
                        exports: [NotifyComponent]
                        // providers: [ { provide: APP_CONFIG, useValue: AppConfig }]
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
