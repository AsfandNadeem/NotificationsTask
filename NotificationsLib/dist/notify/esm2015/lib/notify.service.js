import { Injectable } from '@angular/core';
import { NotifyContainerComponent } from './notify-container/notify-container.component';
import { NotifyComponent } from './notify.component';
import * as i0 from "@angular/core";
import * as i1 from "./elementAttachment.service";
export class NotifyService {
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
NotifyService.ɵfac = function NotifyService_Factory(t) { return new (t || NotifyService)(i0.ɵɵinject(i1.ElementAttachmentService), i0.ɵɵinject(i0.ApplicationRef)); };
NotifyService.ɵprov = i0.ɵɵdefineInjectable({ token: NotifyService, factory: NotifyService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotifyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ElementAttachmentService }, { type: i0.ApplicationRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQTZELFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUdoSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUtyRCxNQUFNLE9BQU8sYUFBYTtJQVF4QixZQUFvQixjQUF3QyxFQUNsRCxNQUFzQjtRQURaLG1CQUFjLEdBQWQsY0FBYyxDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQVBoQyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsVUFBSyxHQUFHLEtBQUssRUFBaUIsQ0FBQztRQUN2QixjQUFTLEdBQW1DLEVBQUUsQ0FBQztRQU9yRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFHTywwQkFBMEIsQ0FBQyxNQUFjLEVBQUUsT0FBZSxFQUFFLElBQVk7UUFDOUUsd0JBQXdCO1FBQ3hCLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNwRixxQkFBcUI7UUFDckIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsaUJBQWlC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QUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgRW1iZWRkZWRWaWV3UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWxlbWVudEF0dGFjaG1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9lbGVtZW50QXR0YWNobWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IElOb3RpZmljYXRpb24gfSBmcm9tICcuL25vdGlmaWNhdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTm90aWZ5Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZnktY29udGFpbmVyL25vdGlmeS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdGlmeUNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZ5LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmeVNlcnZpY2Uge1xuXG4gIG1heExpbWl0ID0gMTtcbiAgUXVldWUgPSBBcnJheTxJTm90aWZpY2F0aW9uPigpO1xuICBwcml2YXRlIF9jaGlsZHJlbjpDb21wb25lbnRSZWY8Tm90aWZ5Q29tcG9uZW50PltdID0gW107XG5cbiAgcHJpdmF0ZSBOb3RpZnlDb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBOb3RpZnlDb250YWluZXJSZWY6IENvbXBvbmVudFJlZjxOb3RpZnlDb250YWluZXJDb21wb25lbnQ+O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRTZXJ2aWNlOiBFbGVtZW50QXR0YWNobWVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7XG5cbiAgICB0aGlzLk5vdGlmeUNvbnRhaW5lclJlZiA9IHRoaXMuZWxlbWVudFNlcnZpY2UuY3JlYXRlQ29tcG9uZW50aW5Eb20oTm90aWZ5Q29udGFpbmVyQ29tcG9uZW50KTtcbiAgICB0aGlzLk5vdGlmeUNvbnRhaW5lckVsZW1lbnQgPSB0aGlzLmVsZW1lbnRTZXJ2aWNlLmdldEVsZW1lbnQodGhpcy5Ob3RpZnlDb250YWluZXJSZWYpO1xuICAgIHRoaXMuZWxlbWVudFNlcnZpY2UuYWRkQ2hpbGR0b0VsZW1lbnQodGhpcy5Ob3RpZnlDb250YWluZXJFbGVtZW50KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBhcHBlbmRDb21wb25lbnRUb0NvbnRhaW5lcihoZWFkZXI6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcbiAgICAvL0NyZWF0ZSBDaGlsZCBDb21wb25lbnRcbiAgICBjb25zdCBjaGlsZENvbXBvbmVudFJlZiA9IHRoaXMuZWxlbWVudFNlcnZpY2UuY3JlYXRlQ29tcG9uZW50aW5Eb20oTm90aWZ5Q29tcG9uZW50KTtcbiAgICAvL0dldCBjaGlsZCBDb21wb25lbnRcbiAgICBjb25zdCBjaGlsZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRTZXJ2aWNlLmdldEVsZW1lbnQoY2hpbGRDb21wb25lbnRSZWYpO1xuXG4gICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UuaGVhZGVyID0gaGVhZGVyO1xuXG4gICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UubWVzc2FnZSA9IG1lc3NhZ2U7XG5cbiAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS50eXBlID0gdHlwZTtcblxuXG4gICAgXG4gICAgY29uc3Qgc3ViID0gY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UuZGVzdHJveS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRlc3Ryb3koY2hpbGRDb21wb25lbnRSZWYpO1xuICAgIH0pO1xuICAgIC8vQWRkIGNoaWxkIGNvbXBvbmVudCB0byBwYXJlbnRcbiAgICB0aGlzLmVsZW1lbnRTZXJ2aWNlLmFkZENoaWxkdG9FbGVtZW50KGNoaWxkRWxlbWVudCwgdGhpcy5Ob3RpZnlDb250YWluZXJFbGVtZW50KTtcbiAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50UmVmKTtcblxuXG4gICAgaWYgKHR5cGUgPT0gXCJpbmZvXCIpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZihjaGlsZENvbXBvbmVudFJlZilcbiAgICAgICAge3RoaXMuZGVzdHJveShjaGlsZENvbXBvbmVudFJlZik7fVxuICAgICAgfSwgMTAwMDApO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oaGVhZGVyLCBtZXNzYWdlLCBjYXRlZ29yeSkge1xuICAgIGlmICh0aGlzLm1heExpbWl0IDw9IDUpIHtcbiAgICAgIHRoaXMuYXBwZW5kQ29tcG9uZW50VG9Db250YWluZXIoaGVhZGVyLCBtZXNzYWdlICsgdGhpcy5tYXhMaW1pdCwgY2F0ZWdvcnkpO1xuICAgICAgdGhpcy5tYXhMaW1pdCsrO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuUXVldWUucHVzaCh7aGVhZGVyOmhlYWRlcixtZXNzYWdlOm1lc3NhZ2UsIHR5cGU6Y2F0ZWdvcnl9KTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KGNoaWxkQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55Pikge1xuICAgIHRoaXMuZWxlbWVudFNlcnZpY2UuZGVzdHJveUVsZW1lbnQoY2hpbGRDb21wb25lbnRSZWYpO1xuICAgICh0aGlzLl9jaGlsZHJlbikuc3BsaWNlKCh0aGlzLl9jaGlsZHJlbikuaW5kZXhPZihjaGlsZENvbXBvbmVudFJlZiksIDEpO1xuICAgIGlmICh0aGlzLm1heExpbWl0ID4gMCkge1xuICAgICAgdGhpcy5tYXhMaW1pdC0tO1xuICAgICAgaWYgKHRoaXMuUXVldWUubGVuZ3RoID49IDEpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRDb21wb25lbnRUb0NvbnRhaW5lcih0aGlzLlF1ZXVlWzBdLmhlYWRlciwgdGhpcy5RdWV1ZVswXS5tZXNzYWdlLCB0aGlzLlF1ZXVlWzBdLnR5cGUpO1xuICAgICAgICB0aGlzLlF1ZXVlLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBkZXN0cm95QWxsKClcbiAge1xuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY21wPT5jbXAuZGVzdHJveSgpKTtcbiAgICB0aGlzLl9jaGlsZHJlbi5zcGxpY2UoMCx0aGlzLl9jaGlsZHJlbi5sZW5ndGgpO1xuICB9XG5cblxuXG5cblxufVxuIl19