import { Injectable } from '@angular/core';
import { NotifyContainerComponent } from './notify-container/notify-container.component';
import { NotifyComponent } from './notify.component';
import * as i0 from "@angular/core";
import * as i1 from "./elementAttachment.service";
export class NotifyService {
    constructor(elementService, appRef) {
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
        this.countNotifications++;
        if (type == "info") {
            setTimeout(() => {
                if (childComponentRef) {
                    this.destroy(childComponentRef);
                }
            }, 10000);
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
    destroy(childComponentRef) {
        this.elementService.destroyElement(childComponentRef);
        (this._children).splice((this._children).indexOf(childComponentRef), 1);
        if (this.countNotifications > 0) {
            this.countNotifications--;
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
NotifyService.ɵfac = function NotifyService_Factory(t) { return new (t || NotifyService)(i0.ɵɵinject(i1.ElementAttachmentService), i0.ɵɵinject(i0.ApplicationRef)); };
NotifyService.ɵprov = i0.ɵɵdefineInjectable({ token: NotifyService, factory: NotifyService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotifyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ElementAttachmentService }, { type: i0.ApplicationRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQTZELFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUdoSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUtyRCxNQUFNLE9BQU8sYUFBYTtJQVF4QixZQUFvQixjQUF3QyxFQUNsRCxNQUFzQjtRQURaLG1CQUFjLEdBQWQsY0FBYyxDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQVJoQyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLFVBQUssR0FBRyxLQUFLLEVBQWlCLENBQUM7UUFDdkIsY0FBUyxHQUFtQyxFQUFFLENBQUM7UUFPckQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBR08sMEJBQTBCLENBQUMsTUFBYyxFQUFFLE9BQWUsRUFBRSxJQUFZO1FBQzlFLHdCQUF3QjtRQUN4QixNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEYscUJBQXFCO1FBQ3JCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FB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QUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBFbWJlZGRlZFZpZXdSZWYsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbGVtZW50QXR0YWNobWVudFNlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnRBdHRhY2htZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgSU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOb3RpZnlDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL25vdGlmeS1jb250YWluZXIvbm90aWZ5LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWZ5Q29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZnkuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZ5U2VydmljZSB7XG4gIG1heExpbWl0ID0gNTtcbiAgY291bnROb3RpZmljYXRpb25zID0gMDtcbiAgUXVldWUgPSBBcnJheTxJTm90aWZpY2F0aW9uPigpO1xuICBwcml2YXRlIF9jaGlsZHJlbjpDb21wb25lbnRSZWY8Tm90aWZ5Q29tcG9uZW50PltdID0gW107XG4gIHByaXZhdGUgTm90aWZ5Q29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgTm90aWZ5Q29udGFpbmVyUmVmOiBDb21wb25lbnRSZWY8Tm90aWZ5Q29udGFpbmVyQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRTZXJ2aWNlOiBFbGVtZW50QXR0YWNobWVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7XG5cbiAgICB0aGlzLk5vdGlmeUNvbnRhaW5lclJlZiA9IHRoaXMuZWxlbWVudFNlcnZpY2UuY3JlYXRlQ29tcG9uZW50aW5Eb20oTm90aWZ5Q29udGFpbmVyQ29tcG9uZW50KTtcbiAgICB0aGlzLk5vdGlmeUNvbnRhaW5lckVsZW1lbnQgPSB0aGlzLmVsZW1lbnRTZXJ2aWNlLmdldEVsZW1lbnQodGhpcy5Ob3RpZnlDb250YWluZXJSZWYpO1xuICAgIHRoaXMuZWxlbWVudFNlcnZpY2UuYWRkQ2hpbGR0b0VsZW1lbnQodGhpcy5Ob3RpZnlDb250YWluZXJFbGVtZW50KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBhcHBlbmRDb21wb25lbnRUb0NvbnRhaW5lcihoZWFkZXI6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcbiAgICAvL0NyZWF0ZSBDaGlsZCBDb21wb25lbnRcbiAgICBjb25zdCBjaGlsZENvbXBvbmVudFJlZiA9IHRoaXMuZWxlbWVudFNlcnZpY2UuY3JlYXRlQ29tcG9uZW50aW5Eb20oTm90aWZ5Q29tcG9uZW50KTtcbiAgICAvL0dldCBjaGlsZCBDb21wb25lbnRcbiAgICBjb25zdCBjaGlsZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRTZXJ2aWNlLmdldEVsZW1lbnQoY2hpbGRDb21wb25lbnRSZWYpO1xuXG4gICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UuaGVhZGVyID0gaGVhZGVyO1xuXG4gICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UubWVzc2FnZSA9IG1lc3NhZ2U7XG5cbiAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS50eXBlID0gdHlwZTtcblxuXG4gICAgXG4gICAgY29uc3Qgc3ViID0gY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UuZGVzdHJveS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRlc3Ryb3koY2hpbGRDb21wb25lbnRSZWYpO1xuICAgIH0pO1xuICAgIC8vQWRkIGNoaWxkIGNvbXBvbmVudCB0byBwYXJlbnRcbiAgICB0aGlzLmVsZW1lbnRTZXJ2aWNlLmFkZENoaWxkdG9FbGVtZW50KGNoaWxkRWxlbWVudCwgdGhpcy5Ob3RpZnlDb250YWluZXJFbGVtZW50KTtcbiAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50UmVmKTtcbiAgICB0aGlzLmNvdW50Tm90aWZpY2F0aW9ucysrO1xuXG4gICAgaWYgKHR5cGUgPT0gXCJpbmZvXCIpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZihjaGlsZENvbXBvbmVudFJlZilcbiAgICAgICAge3RoaXMuZGVzdHJveShjaGlsZENvbXBvbmVudFJlZik7fVxuICAgICAgfSwgMTAwMDApO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oaGVhZGVyLCBtZXNzYWdlLCBjYXRlZ29yeSkge1xuICAgIGlmICh0aGlzLmNvdW50Tm90aWZpY2F0aW9ucyA8IHRoaXMubWF4TGltaXQpIHtcbiAgICAgIHRoaXMuYXBwZW5kQ29tcG9uZW50VG9Db250YWluZXIoaGVhZGVyLCBtZXNzYWdlLCBjYXRlZ29yeSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5RdWV1ZS5wdXNoKHtoZWFkZXI6aGVhZGVyLG1lc3NhZ2U6bWVzc2FnZSwgdHlwZTpjYXRlZ29yeX0pO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koY2hpbGRDb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KSB7XG4gICAgdGhpcy5lbGVtZW50U2VydmljZS5kZXN0cm95RWxlbWVudChjaGlsZENvbXBvbmVudFJlZik7XG4gICAgKHRoaXMuX2NoaWxkcmVuKS5zcGxpY2UoKHRoaXMuX2NoaWxkcmVuKS5pbmRleE9mKGNoaWxkQ29tcG9uZW50UmVmKSwgMSk7XG4gICAgaWYgKHRoaXMuY291bnROb3RpZmljYXRpb25zID4gMCkge1xuICAgICAgdGhpcy5jb3VudE5vdGlmaWNhdGlvbnMtLTtcbiAgICAgIGlmICh0aGlzLlF1ZXVlLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kQ29tcG9uZW50VG9Db250YWluZXIodGhpcy5RdWV1ZVswXS5oZWFkZXIsIHRoaXMuUXVldWVbMF0ubWVzc2FnZSwgdGhpcy5RdWV1ZVswXS50eXBlKTtcbiAgICAgICAgdGhpcy5RdWV1ZS5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgZGVzdHJveUFsbCgpXG4gIHtcbiAgICB0aGlzLl9jaGlsZHJlbi5mb3JFYWNoKGNtcD0+Y21wLmRlc3Ryb3koKSk7XG4gICAgdGhpcy5fY2hpbGRyZW4uc3BsaWNlKDAsdGhpcy5fY2hpbGRyZW4ubGVuZ3RoKTtcbiAgfVxuXG5cblxuXG5cbn1cbiJdfQ==