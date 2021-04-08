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
        this._children.push(childComponentRef);
        this.countNotifications++;
        if (type == "info") {
            childComponentRef.instance.exists = true;
            childComponentRef.instance.progressrequired = true;
            childComponentRef.instance.progressTime = 10000;
            childComponentRef.instance.actualTime = 10000;
            setTimeout(() => {
                if (childComponentRef.instance.exists) {
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
        this._children.forEach(cmp => this.destroy(cmp));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQTZELFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUdoSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUtyRCxNQUFNLE9BQU8sYUFBYTtJQVF4QixZQUFvQixjQUF3QyxFQUNsRCxNQUFzQjtRQURaLG1CQUFjLEdBQWQsY0FBYyxDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQVJoQyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLFVBQUssR0FBRyxLQUFLLEVBQWlCLENBQUM7UUFDdkIsY0FBUyxHQUFvQyxFQUFFLENBQUM7UUFPdEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBR08sMEJBQTBCLENBQUMsTUFBYyxFQUFFLE9BQWUsRUFBRSxJQUFZO1FBQzlFLHdCQUF3QjtRQUN4QixNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEYscUJBQXFCO1FBQ3JCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FB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S0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3BCO1NBQ0Y7SUFDSCxDQUFDO0lBR0QsVUFBVTtRQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7SUFFOUIsQ0FBQzs7MEVBckZVLGFBQWE7cURBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRlosTUFBTTt1RkFFUCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgRW1iZWRkZWRWaWV3UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWxlbWVudEF0dGFjaG1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9lbGVtZW50QXR0YWNobWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IElOb3RpZmljYXRpb24gfSBmcm9tICcuL25vdGlmaWNhdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTm90aWZ5Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZnktY29udGFpbmVyL25vdGlmeS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdGlmeUNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZ5LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmeVNlcnZpY2Uge1xuICBtYXhMaW1pdCA9IDU7XG4gIGNvdW50Tm90aWZpY2F0aW9ucyA9IDA7XG4gIFF1ZXVlID0gQXJyYXk8SU5vdGlmaWNhdGlvbj4oKTtcbiAgcHJpdmF0ZSBfY2hpbGRyZW46IENvbXBvbmVudFJlZjxOb3RpZnlDb21wb25lbnQ+W10gPSBbXTtcbiAgcHJpdmF0ZSBOb3RpZnlDb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBOb3RpZnlDb250YWluZXJSZWY6IENvbXBvbmVudFJlZjxOb3RpZnlDb250YWluZXJDb21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFNlcnZpY2U6IEVsZW1lbnRBdHRhY2htZW50U2VydmljZSxcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYpIHtcblxuICAgIHRoaXMuTm90aWZ5Q29udGFpbmVyUmVmID0gdGhpcy5lbGVtZW50U2VydmljZS5jcmVhdGVDb21wb25lbnRpbkRvbShOb3RpZnlDb250YWluZXJDb21wb25lbnQpO1xuICAgIHRoaXMuTm90aWZ5Q29udGFpbmVyRWxlbWVudCA9IHRoaXMuZWxlbWVudFNlcnZpY2UuZ2V0RWxlbWVudCh0aGlzLk5vdGlmeUNvbnRhaW5lclJlZik7XG4gICAgdGhpcy5lbGVtZW50U2VydmljZS5hZGRDaGlsZHRvRWxlbWVudCh0aGlzLk5vdGlmeUNvbnRhaW5lckVsZW1lbnQpO1xuICB9XG5cblxuICBwcml2YXRlIGFwcGVuZENvbXBvbmVudFRvQ29udGFpbmVyKGhlYWRlcjogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIC8vQ3JlYXRlIENoaWxkIENvbXBvbmVudFxuICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50UmVmID0gdGhpcy5lbGVtZW50U2VydmljZS5jcmVhdGVDb21wb25lbnRpbkRvbShOb3RpZnlDb21wb25lbnQpO1xuICAgIC8vR2V0IGNoaWxkIENvbXBvbmVudFxuICAgIGNvbnN0IGNoaWxkRWxlbWVudCA9IHRoaXMuZWxlbWVudFNlcnZpY2UuZ2V0RWxlbWVudChjaGlsZENvbXBvbmVudFJlZik7XG5cbiAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5oZWFkZXIgPSBoZWFkZXI7XG5cbiAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5tZXNzYWdlID0gbWVzc2FnZTtcblxuICAgIGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLnR5cGUgPSB0eXBlO1xuXG4gICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UuZXhpc3RzID0gdHJ1ZTtcblxuXG5cbiAgICBjb25zdCBzdWIgPSBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5kZXN0cm95LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZGVzdHJveShjaGlsZENvbXBvbmVudFJlZik7XG4gICAgfSk7XG4gICAgLy9BZGQgY2hpbGQgY29tcG9uZW50IHRvIHBhcmVudFxuICAgIHRoaXMuZWxlbWVudFNlcnZpY2UuYWRkQ2hpbGR0b0VsZW1lbnQoY2hpbGRFbGVtZW50LCB0aGlzLk5vdGlmeUNvbnRhaW5lckVsZW1lbnQpO1xuICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnRSZWYpO1xuICAgIHRoaXMuY291bnROb3RpZmljYXRpb25zKys7XG5cbiAgICBpZiAodHlwZSA9PSBcImluZm9cIikge1xuICAgICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UuZXhpc3RzID0gdHJ1ZTtcbiAgICAgIGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLnByb2dyZXNzcmVxdWlyZWQgPSB0cnVlO1xuICAgICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UucHJvZ3Jlc3NUaW1lID0gMTAwMDA7XG4gICAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5hY3R1YWxUaW1lID0gMTAwMDA7ICAgICAgXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLmV4aXN0cykge1xuICAgICAgICAgIHRoaXMuZGVzdHJveShjaGlsZENvbXBvbmVudFJlZik7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwNTAwKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKGhlYWRlciwgbWVzc2FnZSwgY2F0ZWdvcnkpIHtcbiAgICBpZiAodGhpcy5jb3VudE5vdGlmaWNhdGlvbnMgPCB0aGlzLm1heExpbWl0KSB7XG4gICAgICB0aGlzLmFwcGVuZENvbXBvbmVudFRvQ29udGFpbmVyKGhlYWRlciwgbWVzc2FnZSwgY2F0ZWdvcnkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuUXVldWUucHVzaCh7IGhlYWRlcjogaGVhZGVyLCBtZXNzYWdlOiBtZXNzYWdlLCB0eXBlOiBjYXRlZ29yeSB9KTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KGNoaWxkQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55Pikge1xuICAgIHRoaXMuZWxlbWVudFNlcnZpY2UuZGVzdHJveUVsZW1lbnQoY2hpbGRDb21wb25lbnRSZWYpO1xuICAgICh0aGlzLl9jaGlsZHJlbikuc3BsaWNlKCh0aGlzLl9jaGlsZHJlbikuaW5kZXhPZihjaGlsZENvbXBvbmVudFJlZiksIDEpO1xuICAgIGlmIChjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5leGlzdHMpIHtcbiAgICAgIGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLmV4aXN0cyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb3VudE5vdGlmaWNhdGlvbnMgPiAwKSB7XG4gICAgICB0aGlzLmNvdW50Tm90aWZpY2F0aW9ucy0tO1xuICAgICAgaWYgKHRoaXMuUXVldWUubGVuZ3RoID49IDEpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRDb21wb25lbnRUb0NvbnRhaW5lcih0aGlzLlF1ZXVlWzBdLmhlYWRlciwgdGhpcy5RdWV1ZVswXS5tZXNzYWdlLCB0aGlzLlF1ZXVlWzBdLnR5cGUpO1xuICAgICAgICB0aGlzLlF1ZXVlLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBkZXN0cm95QWxsKCkge1xuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY21wID0+IHRoaXMuZGVzdHJveShjbXApKTtcbiAgICB0aGlzLl9jaGlsZHJlbi5zcGxpY2UoMCwgdGhpcy5fY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICB0aGlzLmNvdW50Tm90aWZpY2F0aW9ucyA9IDA7XG4gICAgXG4gIH1cblxuXG5cblxuXG59XG4iXX0=