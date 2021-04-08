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
            childComponentRef.instance.progressrequired = true;
            childComponentRef.instance.progressTime = 10000;
            childComponentRef.instance.actualTime = 10000;
            setTimeout(() => {
                if (this.exists) {
                    this.destroy(childComponentRef);
                }
            }, 10500);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQTZELFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUdoSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUtyRCxNQUFNLE9BQU8sYUFBYTtJQVN4QixZQUFvQixjQUF3QyxFQUNsRCxNQUFzQjtRQURaLG1CQUFjLEdBQWQsY0FBYyxDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQVRoQyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLFVBQUssR0FBRyxLQUFLLEVBQWlCLENBQUM7UUFDL0IsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNOLGNBQVMsR0FBb0MsRUFBRSxDQUFDO1FBT3RELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDckUsQ0FBQztJQUdPLDBCQUEwQixDQUFDLE1BQWMsRUFBRSxPQUFlLEVBQUUsSUFBWTtRQUM5RSx3QkFBd0I7UUFDeEIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3BGLHFCQUFxQjtRQUNy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QUFFLENBQUM7YUFDcEI7U0FDRjtJQUNILENBQUM7SUFHRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7OzBFQW5GVSxhQUFhO3FEQUFiLGFBQWEsV0FBYixhQUFhLG1CQUZaLE1BQU07dUZBRVAsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVsZW1lbnRBdHRhY2htZW50U2VydmljZSB9IGZyb20gJy4vZWxlbWVudEF0dGFjaG1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBJTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9ub3RpZmljYXRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IE5vdGlmeUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZ5LWNvbnRhaW5lci9ub3RpZnktY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3RpZnlDb21wb25lbnQgfSBmcm9tICcuL25vdGlmeS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOb3RpZnlTZXJ2aWNlIHtcbiAgbWF4TGltaXQgPSA1O1xuICBjb3VudE5vdGlmaWNhdGlvbnMgPSAwO1xuICBRdWV1ZSA9IEFycmF5PElOb3RpZmljYXRpb24+KCk7XG4gIGV4aXN0cyA9IHRydWU7XG4gIHByaXZhdGUgX2NoaWxkcmVuOiBDb21wb25lbnRSZWY8Tm90aWZ5Q29tcG9uZW50PltdID0gW107XG4gIHByaXZhdGUgTm90aWZ5Q29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgTm90aWZ5Q29udGFpbmVyUmVmOiBDb21wb25lbnRSZWY8Tm90aWZ5Q29udGFpbmVyQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRTZXJ2aWNlOiBFbGVtZW50QXR0YWNobWVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7XG5cbiAgICB0aGlzLk5vdGlmeUNvbnRhaW5lclJlZiA9IHRoaXMuZWxlbWVudFNlcnZpY2UuY3JlYXRlQ29tcG9uZW50aW5Eb20oTm90aWZ5Q29udGFpbmVyQ29tcG9uZW50KTtcbiAgICB0aGlzLk5vdGlmeUNvbnRhaW5lckVsZW1lbnQgPSB0aGlzLmVsZW1lbnRTZXJ2aWNlLmdldEVsZW1lbnQodGhpcy5Ob3RpZnlDb250YWluZXJSZWYpO1xuICAgIHRoaXMuZWxlbWVudFNlcnZpY2UuYWRkQ2hpbGR0b0VsZW1lbnQodGhpcy5Ob3RpZnlDb250YWluZXJFbGVtZW50KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBhcHBlbmRDb21wb25lbnRUb0NvbnRhaW5lcihoZWFkZXI6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcbiAgICAvL0NyZWF0ZSBDaGlsZCBDb21wb25lbnRcbiAgICBjb25zdCBjaGlsZENvbXBvbmVudFJlZiA9IHRoaXMuZWxlbWVudFNlcnZpY2UuY3JlYXRlQ29tcG9uZW50aW5Eb20oTm90aWZ5Q29tcG9uZW50KTtcbiAgICAvL0dldCBjaGlsZCBDb21wb25lbnRcbiAgICBjb25zdCBjaGlsZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRTZXJ2aWNlLmdldEVsZW1lbnQoY2hpbGRDb21wb25lbnRSZWYpO1xuXG4gICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UuaGVhZGVyID0gaGVhZGVyO1xuXG4gICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UubWVzc2FnZSA9IG1lc3NhZ2U7XG5cbiAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS50eXBlID0gdHlwZTtcblxuXG5cbiAgICBjb25zdCBzdWIgPSBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5kZXN0cm95LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZGVzdHJveShjaGlsZENvbXBvbmVudFJlZik7XG4gICAgfSk7XG4gICAgLy9BZGQgY2hpbGQgY29tcG9uZW50IHRvIHBhcmVudFxuICAgIHRoaXMuZWxlbWVudFNlcnZpY2UuYWRkQ2hpbGR0b0VsZW1lbnQoY2hpbGRFbGVtZW50LCB0aGlzLk5vdGlmeUNvbnRhaW5lckVsZW1lbnQpO1xuICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnRSZWYpO1xuICAgIHRoaXMuY291bnROb3RpZmljYXRpb25zKys7XG5cbiAgICBpZiAodHlwZSA9PSBcImluZm9cIikge1xuICAgICAgdGhpcy5leGlzdHMgPSB0cnVlO1xuICAgICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UucHJvZ3Jlc3NyZXF1aXJlZCA9IHRydWU7XG4gICAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5wcm9ncmVzc1RpbWUgPSAxMDAwMDtcbiAgICAgIGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLmFjdHVhbFRpbWUgPSAxMDAwMDsgICAgICBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5leGlzdHMpIHtcbiAgICAgICAgICB0aGlzLmRlc3Ryb3koY2hpbGRDb21wb25lbnRSZWYpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDUwMCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbihoZWFkZXIsIG1lc3NhZ2UsIGNhdGVnb3J5KSB7XG4gICAgaWYgKHRoaXMuY291bnROb3RpZmljYXRpb25zIDwgdGhpcy5tYXhMaW1pdCkge1xuICAgICAgdGhpcy5hcHBlbmRDb21wb25lbnRUb0NvbnRhaW5lcihoZWFkZXIsIG1lc3NhZ2UsIGNhdGVnb3J5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLlF1ZXVlLnB1c2goeyBoZWFkZXI6IGhlYWRlciwgbWVzc2FnZTogbWVzc2FnZSwgdHlwZTogY2F0ZWdvcnkgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveShjaGlsZENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4pIHtcbiAgICB0aGlzLmVsZW1lbnRTZXJ2aWNlLmRlc3Ryb3lFbGVtZW50KGNoaWxkQ29tcG9uZW50UmVmKTtcbiAgICAodGhpcy5fY2hpbGRyZW4pLnNwbGljZSgodGhpcy5fY2hpbGRyZW4pLmluZGV4T2YoY2hpbGRDb21wb25lbnRSZWYpLCAxKTtcbiAgICBpZiAodGhpcy5leGlzdHMpIHtcbiAgICAgIHRoaXMuZXhpc3RzID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvdW50Tm90aWZpY2F0aW9ucyA+IDApIHtcbiAgICAgIHRoaXMuY291bnROb3RpZmljYXRpb25zLS07XG4gICAgICBpZiAodGhpcy5RdWV1ZS5sZW5ndGggPj0gMSkge1xuICAgICAgICB0aGlzLmFwcGVuZENvbXBvbmVudFRvQ29udGFpbmVyKHRoaXMuUXVldWVbMF0uaGVhZGVyLCB0aGlzLlF1ZXVlWzBdLm1lc3NhZ2UsIHRoaXMuUXVldWVbMF0udHlwZSk7XG4gICAgICAgIHRoaXMuUXVldWUuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGRlc3Ryb3lBbGwoKSB7XG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjbXAgPT4gY21wLmRlc3Ryb3koKSk7XG4gICAgdGhpcy5fY2hpbGRyZW4uc3BsaWNlKDAsIHRoaXMuX2NoaWxkcmVuLmxlbmd0aCk7XG4gICAgdGhpcy5jb3VudE5vdGlmaWNhdGlvbnMgPSAwO1xuICB9XG5cblxuXG5cblxufVxuIl19