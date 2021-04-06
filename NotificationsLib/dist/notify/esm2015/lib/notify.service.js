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
        this.exists = true;
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
            this.exists = true;
            setTimeout(() => {
                if (this.exists) {
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
        if (this.exists) {
            this.exists = false;
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
        this._children.forEach(cmp => cmp.destroy());
        this._children.splice(0, this._children.length);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQTZELFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUdoSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUtyRCxNQUFNLE9BQU8sYUFBYTtJQVN4QixZQUFvQixjQUF3QyxFQUNsRCxNQUFzQjtRQURaLG1CQUFjLEdBQWQsY0FBYyxDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQVRoQyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLFVBQUssR0FBRyxLQUFLLEVBQWlCLENBQUM7UUFDL0IsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNOLGNBQVMsR0FBb0MsRUFBRSxDQUFDO1FBT3RELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDckUsQ0FBQztJQUdPLDBCQUEwQixDQUFDLE1BQWMsRUFBRSxPQUFlLEVBQUUsSUFBWTtRQUM5RSx3QkFBd0I7UUFDeEIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3BGLHFCQUFxQjtRQUNy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Q0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDOzswRUFoRlUsYUFBYTtxREFBYixhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNO3VGQUVQLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBFbWJlZGRlZFZpZXdSZWYsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbGVtZW50QXR0YWNobWVudFNlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnRBdHRhY2htZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgSU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOb3RpZnlDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL25vdGlmeS1jb250YWluZXIvbm90aWZ5LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWZ5Q29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZnkuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZ5U2VydmljZSB7XG4gIG1heExpbWl0ID0gNTtcbiAgY291bnROb3RpZmljYXRpb25zID0gMDtcbiAgUXVldWUgPSBBcnJheTxJTm90aWZpY2F0aW9uPigpO1xuICBleGlzdHMgPSB0cnVlO1xuICBwcml2YXRlIF9jaGlsZHJlbjogQ29tcG9uZW50UmVmPE5vdGlmeUNvbXBvbmVudD5bXSA9IFtdO1xuICBwcml2YXRlIE5vdGlmeUNvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIE5vdGlmeUNvbnRhaW5lclJlZjogQ29tcG9uZW50UmVmPE5vdGlmeUNvbnRhaW5lckNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50U2VydmljZTogRWxlbWVudEF0dGFjaG1lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZikge1xuXG4gICAgdGhpcy5Ob3RpZnlDb250YWluZXJSZWYgPSB0aGlzLmVsZW1lbnRTZXJ2aWNlLmNyZWF0ZUNvbXBvbmVudGluRG9tKE5vdGlmeUNvbnRhaW5lckNvbXBvbmVudCk7XG4gICAgdGhpcy5Ob3RpZnlDb250YWluZXJFbGVtZW50ID0gdGhpcy5lbGVtZW50U2VydmljZS5nZXRFbGVtZW50KHRoaXMuTm90aWZ5Q29udGFpbmVyUmVmKTtcbiAgICB0aGlzLmVsZW1lbnRTZXJ2aWNlLmFkZENoaWxkdG9FbGVtZW50KHRoaXMuTm90aWZ5Q29udGFpbmVyRWxlbWVudCk7XG4gIH1cblxuXG4gIHByaXZhdGUgYXBwZW5kQ29tcG9uZW50VG9Db250YWluZXIoaGVhZGVyOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XG4gICAgLy9DcmVhdGUgQ2hpbGQgQ29tcG9uZW50XG4gICAgY29uc3QgY2hpbGRDb21wb25lbnRSZWYgPSB0aGlzLmVsZW1lbnRTZXJ2aWNlLmNyZWF0ZUNvbXBvbmVudGluRG9tKE5vdGlmeUNvbXBvbmVudCk7XG4gICAgLy9HZXQgY2hpbGQgQ29tcG9uZW50XG4gICAgY29uc3QgY2hpbGRFbGVtZW50ID0gdGhpcy5lbGVtZW50U2VydmljZS5nZXRFbGVtZW50KGNoaWxkQ29tcG9uZW50UmVmKTtcblxuICAgIGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLmhlYWRlciA9IGhlYWRlcjtcblxuICAgIGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UudHlwZSA9IHR5cGU7XG5cblxuXG4gICAgY29uc3Qgc3ViID0gY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UuZGVzdHJveS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRlc3Ryb3koY2hpbGRDb21wb25lbnRSZWYpO1xuICAgIH0pO1xuICAgIC8vQWRkIGNoaWxkIGNvbXBvbmVudCB0byBwYXJlbnRcbiAgICB0aGlzLmVsZW1lbnRTZXJ2aWNlLmFkZENoaWxkdG9FbGVtZW50KGNoaWxkRWxlbWVudCwgdGhpcy5Ob3RpZnlDb250YWluZXJFbGVtZW50KTtcbiAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50UmVmKTtcbiAgICB0aGlzLmNvdW50Tm90aWZpY2F0aW9ucysrO1xuXG4gICAgaWYgKHR5cGUgPT0gXCJpbmZvXCIpIHtcbiAgICAgIHRoaXMuZXhpc3RzID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5leGlzdHMpIHtcbiAgICAgICAgICB0aGlzLmRlc3Ryb3koY2hpbGRDb21wb25lbnRSZWYpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDAwMCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbihoZWFkZXIsIG1lc3NhZ2UsIGNhdGVnb3J5KSB7XG4gICAgaWYgKHRoaXMuY291bnROb3RpZmljYXRpb25zIDwgdGhpcy5tYXhMaW1pdCkge1xuICAgICAgdGhpcy5hcHBlbmRDb21wb25lbnRUb0NvbnRhaW5lcihoZWFkZXIsIG1lc3NhZ2UsIGNhdGVnb3J5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLlF1ZXVlLnB1c2goeyBoZWFkZXI6IGhlYWRlciwgbWVzc2FnZTogbWVzc2FnZSwgdHlwZTogY2F0ZWdvcnkgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveShjaGlsZENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4pIHtcbiAgICB0aGlzLmVsZW1lbnRTZXJ2aWNlLmRlc3Ryb3lFbGVtZW50KGNoaWxkQ29tcG9uZW50UmVmKTtcbiAgICAodGhpcy5fY2hpbGRyZW4pLnNwbGljZSgodGhpcy5fY2hpbGRyZW4pLmluZGV4T2YoY2hpbGRDb21wb25lbnRSZWYpLCAxKTtcbiAgICBpZiAodGhpcy5leGlzdHMpIHtcbiAgICAgIHRoaXMuZXhpc3RzID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvdW50Tm90aWZpY2F0aW9ucyA+IDApIHtcbiAgICAgIHRoaXMuY291bnROb3RpZmljYXRpb25zLS07XG4gICAgICBpZiAodGhpcy5RdWV1ZS5sZW5ndGggPj0gMSkge1xuICAgICAgICB0aGlzLmFwcGVuZENvbXBvbmVudFRvQ29udGFpbmVyKHRoaXMuUXVldWVbMF0uaGVhZGVyLCB0aGlzLlF1ZXVlWzBdLm1lc3NhZ2UsIHRoaXMuUXVldWVbMF0udHlwZSk7XG4gICAgICAgIHRoaXMuUXVldWUuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGRlc3Ryb3lBbGwoKSB7XG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjbXAgPT4gY21wLmRlc3Ryb3koKSk7XG4gICAgdGhpcy5fY2hpbGRyZW4uc3BsaWNlKDAsIHRoaXMuX2NoaWxkcmVuLmxlbmd0aCk7XG4gICAgdGhpcy5jb3VudE5vdGlmaWNhdGlvbnMgPSAwO1xuICB9XG5cblxuXG5cblxufVxuIl19