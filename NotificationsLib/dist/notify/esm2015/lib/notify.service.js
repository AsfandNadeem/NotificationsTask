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
        childComponentRef.instance.exists = true;
        const sub = childComponentRef.instance.destroy.subscribe(() => {
            sub.unsubscribe();
            this.destroy(childComponentRef);
        });
        //Add child component to parent
        this.elementService.addChildtoElement(childElement, this.NotifyContainerElement);
        this._children.push(childComponentRef.instance);
        this.countNotifications++;
        if (type == "info") {
            childComponentRef.instance.exists = true;
            childComponentRef.instance.progressrequired = true;
            childComponentRef.instance.progressTime = 10000;
            childComponentRef.instance.actualTime = 10000;
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
        // (this._children).splice((this._children).indexOf(childComponentRef.instance), 1);
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
        this.Queue = [];
        this._children.forEach(cmp => {
            cmp.onClose();
        });
        this._children = [];
        this.countNotifications = 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQTZELFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUdoSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUtyRCxNQUFNLE9BQU8sYUFBYTtJQVF4QixZQUFvQixjQUF3QyxFQUNsRCxNQUFzQjtRQURaLG1CQUFjLEdBQWQsY0FBYyxDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQVJoQyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLFVBQUssR0FBRyxLQUFLLEVBQWlCLENBQUM7UUFDdkIsY0FBUyxHQUFzQixFQUFFLENBQUM7UUFPeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBR08sMEJBQTBCLENBQUMsTUFBYyxFQUFFLE9BQWUsRUFBRSxJQUFZO1FBQzlFLHdCQUF3QjtRQUN4QixNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEYscUJBQXFCO1FBQ3JCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFdkUsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFM0MsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFN0MsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFdkMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFJekMsTUFBTSxHQUFHLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzVELEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDSCwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFMUIsSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFO1lBQ2xCLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3pDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDbkQsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDaEQsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBRUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUTtRQUM1QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzNDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzVEO2FBQ0k7WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUN2RTtJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsaUJBQW9DO1FBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdEQsb0ZBQW9GO1FBRXBGLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNyQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUMzQztRQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDcEI7U0FDRjtJQUNILENBQUM7SUFHRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDM0IsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztJQUU5QixDQUFDOzswRUFwRlUsYUFBYTtxREFBYixhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNO3VGQUVQLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBFbWJlZGRlZFZpZXdSZWYsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbGVtZW50QXR0YWNobWVudFNlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnRBdHRhY2htZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgSU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOb3RpZnlDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL25vdGlmeS1jb250YWluZXIvbm90aWZ5LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWZ5Q29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZnkuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZ5U2VydmljZSB7XG4gIG1heExpbWl0ID0gNTtcbiAgY291bnROb3RpZmljYXRpb25zID0gMDtcbiAgUXVldWUgPSBBcnJheTxJTm90aWZpY2F0aW9uPigpO1xuICBwcml2YXRlIF9jaGlsZHJlbjogTm90aWZ5Q29tcG9uZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBOb3RpZnlDb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBOb3RpZnlDb250YWluZXJSZWY6IENvbXBvbmVudFJlZjxOb3RpZnlDb250YWluZXJDb21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFNlcnZpY2U6IEVsZW1lbnRBdHRhY2htZW50U2VydmljZSxcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYpIHtcblxuICAgIHRoaXMuTm90aWZ5Q29udGFpbmVyUmVmID0gdGhpcy5lbGVtZW50U2VydmljZS5jcmVhdGVDb21wb25lbnRpbkRvbShOb3RpZnlDb250YWluZXJDb21wb25lbnQpO1xuICAgIHRoaXMuTm90aWZ5Q29udGFpbmVyRWxlbWVudCA9IHRoaXMuZWxlbWVudFNlcnZpY2UuZ2V0RWxlbWVudCh0aGlzLk5vdGlmeUNvbnRhaW5lclJlZik7XG4gICAgdGhpcy5lbGVtZW50U2VydmljZS5hZGRDaGlsZHRvRWxlbWVudCh0aGlzLk5vdGlmeUNvbnRhaW5lckVsZW1lbnQpO1xuICB9XG5cblxuICBwcml2YXRlIGFwcGVuZENvbXBvbmVudFRvQ29udGFpbmVyKGhlYWRlcjogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIC8vQ3JlYXRlIENoaWxkIENvbXBvbmVudFxuICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50UmVmID0gdGhpcy5lbGVtZW50U2VydmljZS5jcmVhdGVDb21wb25lbnRpbkRvbShOb3RpZnlDb21wb25lbnQpO1xuICAgIC8vR2V0IGNoaWxkIENvbXBvbmVudFxuICAgIGNvbnN0IGNoaWxkRWxlbWVudCA9IHRoaXMuZWxlbWVudFNlcnZpY2UuZ2V0RWxlbWVudChjaGlsZENvbXBvbmVudFJlZik7XG5cbiAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5oZWFkZXIgPSBoZWFkZXI7XG5cbiAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5tZXNzYWdlID0gbWVzc2FnZTtcblxuICAgIGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLnR5cGUgPSB0eXBlO1xuXG4gICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UuZXhpc3RzID0gdHJ1ZTtcblxuXG5cbiAgICBjb25zdCBzdWIgPSBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5kZXN0cm95LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZGVzdHJveShjaGlsZENvbXBvbmVudFJlZik7XG4gICAgfSk7XG4gICAgLy9BZGQgY2hpbGQgY29tcG9uZW50IHRvIHBhcmVudFxuICAgIHRoaXMuZWxlbWVudFNlcnZpY2UuYWRkQ2hpbGR0b0VsZW1lbnQoY2hpbGRFbGVtZW50LCB0aGlzLk5vdGlmeUNvbnRhaW5lckVsZW1lbnQpO1xuICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UpO1xuICAgIHRoaXMuY291bnROb3RpZmljYXRpb25zKys7XG5cbiAgICBpZiAodHlwZSA9PSBcImluZm9cIikge1xuICAgICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UuZXhpc3RzID0gdHJ1ZTtcbiAgICAgIGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLnByb2dyZXNzcmVxdWlyZWQgPSB0cnVlO1xuICAgICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UucHJvZ3Jlc3NUaW1lID0gMTAwMDA7XG4gICAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5hY3R1YWxUaW1lID0gMTAwMDA7ICAgXG4gICAgfVxuICB9XG5cbiAgb3BlbihoZWFkZXIsIG1lc3NhZ2UsIGNhdGVnb3J5KSB7XG4gICAgaWYgKHRoaXMuY291bnROb3RpZmljYXRpb25zIDwgdGhpcy5tYXhMaW1pdCkge1xuICAgICAgdGhpcy5hcHBlbmRDb21wb25lbnRUb0NvbnRhaW5lcihoZWFkZXIsIG1lc3NhZ2UsIGNhdGVnb3J5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLlF1ZXVlLnB1c2goeyBoZWFkZXI6IGhlYWRlciwgbWVzc2FnZTogbWVzc2FnZSwgdHlwZTogY2F0ZWdvcnkgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveShjaGlsZENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4pIHtcbiAgICB0aGlzLmVsZW1lbnRTZXJ2aWNlLmRlc3Ryb3lFbGVtZW50KGNoaWxkQ29tcG9uZW50UmVmKTtcbiAgICAvLyAodGhpcy5fY2hpbGRyZW4pLnNwbGljZSgodGhpcy5fY2hpbGRyZW4pLmluZGV4T2YoY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UpLCAxKTtcbiAgICBcbiAgICBpZiAoY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UuZXhpc3RzKSB7XG4gICAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5leGlzdHMgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY291bnROb3RpZmljYXRpb25zID4gMCkge1xuICAgICAgdGhpcy5jb3VudE5vdGlmaWNhdGlvbnMtLTtcbiAgICAgIGlmICh0aGlzLlF1ZXVlLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kQ29tcG9uZW50VG9Db250YWluZXIodGhpcy5RdWV1ZVswXS5oZWFkZXIsIHRoaXMuUXVldWVbMF0ubWVzc2FnZSwgdGhpcy5RdWV1ZVswXS50eXBlKTtcbiAgICAgICAgdGhpcy5RdWV1ZS5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgZGVzdHJveUFsbCgpIHtcbiAgICB0aGlzLlF1ZXVlID0gW107XG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjbXAgPT4ge1xuICAgICAgY21wLm9uQ2xvc2UoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuY291bnROb3RpZmljYXRpb25zID0gMDtcbiAgICBcbiAgfVxuXG59XG4iXX0=