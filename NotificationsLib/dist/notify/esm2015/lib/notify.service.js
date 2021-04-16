import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { LibConfigService } from './libconfig';
import { NotifyContainerComponent } from './notify-container/notify-container.component';
import { NotifyComponent } from './notify.component';
import * as i0 from "@angular/core";
import * as i1 from "./elementAttachment.service";
export class NotifyService {
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
        if (this.countNotifications < this.maxLimit) {
            this.appendComponentToContainer(header, message, category);
        }
        else {
            this.Queue.push({ header: header, message: message, type: category });
        }
    }
    destroy(childComponentRef) {
        this.elementService.destroyElement(childComponentRef);
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
NotifyService.ɵfac = function NotifyService_Factory(t) { return new (t || NotifyService)(i0.ɵɵinject(i1.ElementAttachmentService), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(LibConfigService)); };
NotifyService.ɵprov = i0.ɵɵdefineInjectable({ token: NotifyService, factory: NotifyService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotifyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ElementAttachmentService }, { type: i0.ApplicationRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [LibConfigService]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQTZELFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUdoSCxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7QUFLckQsTUFBTSxPQUFPLGFBQWE7SUFTeEIsWUFBb0IsY0FBd0MsRUFDbEQsTUFBc0IsRUFBb0MsTUFBTTtRQUR0RCxtQkFBYyxHQUFkLGNBQWMsQ0FBMEI7UUFDbEQsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBb0MsV0FBTSxHQUFOLE1BQU0sQ0FBQTtRQVIxRSxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLFVBQUssR0FBRyxLQUFLLEVBQWlCLENBQUM7UUFDdkIsY0FBUyxHQUFzQixFQUFFLENBQUM7UUFPeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFB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QUFHLE1BQU0sQ0FBQztRQUMzQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUM3QyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN2QyxNQUFNLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDNUQsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7MEVBdEZVLGFBQWEsd0ZBVWtCLGdCQUFnQjtxREFWL0MsYUFBYSxXQUFiLGFBQWEsbUJBRlosTUFBTTt1RkFFUCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBV29DLE1BQU07dUJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRWxlbWVudEF0dGFjaG1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9lbGVtZW50QXR0YWNobWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IGxpYmNvbmZpZywgTGliQ29uZmlnU2VydmljZSB9IGZyb20gJy4vbGliY29uZmlnJztcbmltcG9ydCB7IElOb3RpZmljYXRpb24gfSBmcm9tICcuL25vdGlmaWNhdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTm90aWZ5Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZnktY29udGFpbmVyL25vdGlmeS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdGlmeUNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZ5LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmeVNlcnZpY2Uge1xuICBwcml2YXRlIGxpYkNvbmZpZzogbGliY29uZmlnO1xuICBtYXhMaW1pdCA9IDA7XG4gIGNvdW50Tm90aWZpY2F0aW9ucyA9IDA7XG4gIFF1ZXVlID0gQXJyYXk8SU5vdGlmaWNhdGlvbj4oKTtcbiAgcHJpdmF0ZSBfY2hpbGRyZW46IE5vdGlmeUNvbXBvbmVudFtdID0gW107XG4gIHByaXZhdGUgTm90aWZ5Q29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgTm90aWZ5Q29udGFpbmVyUmVmOiBDb21wb25lbnRSZWY8Tm90aWZ5Q29udGFpbmVyQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRTZXJ2aWNlOiBFbGVtZW50QXR0YWNobWVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLCBASW5qZWN0KExpYkNvbmZpZ1NlcnZpY2UpIHByaXZhdGUgY29uZmlnKSB7XG5cbiAgICB0aGlzLk5vdGlmeUNvbnRhaW5lclJlZiA9IHRoaXMuZWxlbWVudFNlcnZpY2UuY3JlYXRlQ29tcG9uZW50aW5Eb20oTm90aWZ5Q29udGFpbmVyQ29tcG9uZW50KTtcbiAgICB0aGlzLk5vdGlmeUNvbnRhaW5lckVsZW1lbnQgPSB0aGlzLmVsZW1lbnRTZXJ2aWNlLmdldEVsZW1lbnQodGhpcy5Ob3RpZnlDb250YWluZXJSZWYpO1xuICAgIHRoaXMuZWxlbWVudFNlcnZpY2UuYWRkQ2hpbGR0b0VsZW1lbnQodGhpcy5Ob3RpZnlDb250YWluZXJFbGVtZW50KTtcbiAgICB0aGlzLmxpYkNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgIHRoaXMubWF4TGltaXQgPSB0aGlzLmxpYkNvbmZpZy5tYXhMaW1pdDtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBhcHBlbmRDb21wb25lbnRUb0NvbnRhaW5lcihoZWFkZXI6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcbiAgICAvL0NyZWF0ZSBDaGlsZCBDb21wb25lbnRcbiAgICBjb25zdCBjaGlsZENvbXBvbmVudFJlZiA9IHRoaXMuZWxlbWVudFNlcnZpY2UuY3JlYXRlQ29tcG9uZW50aW5Eb20oTm90aWZ5Q29tcG9uZW50KTtcbiAgICAvL0dldCBjaGlsZCBDb21wb25lbnRcbiAgICBjb25zdCBjaGlsZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRTZXJ2aWNlLmdldEVsZW1lbnQoY2hpbGRDb21wb25lbnRSZWYpO1xuXG4gICAgdGhpcy5kZWZpbmVDb21wb25lbnRWYWx1ZXMoY2hpbGRDb21wb25lbnRSZWYsaGVhZGVyLG1lc3NhZ2UsdHlwZSk7XG4gICAgLy9BZGQgY2hpbGQgY29tcG9uZW50IHRvIHBhcmVudFxuICAgIHRoaXMuZWxlbWVudFNlcnZpY2UuYWRkQ2hpbGR0b0VsZW1lbnQoY2hpbGRFbGVtZW50LCB0aGlzLk5vdGlmeUNvbnRhaW5lckVsZW1lbnQpO1xuICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UpO1xuICAgIHRoaXMuY291bnROb3RpZmljYXRpb25zKys7XG5cbiAgXG4gIH1cblxuICBvcGVuKGhlYWRlciwgbWVzc2FnZSwgY2F0ZWdvcnkpIHtcbiAgICBpZiAodGhpcy5jb3VudE5vdGlmaWNhdGlvbnMgPCB0aGlzLm1heExpbWl0KSB7XG4gICAgICB0aGlzLmFwcGVuZENvbXBvbmVudFRvQ29udGFpbmVyKGhlYWRlciwgbWVzc2FnZSwgY2F0ZWdvcnkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuUXVldWUucHVzaCh7IGhlYWRlcjogaGVhZGVyLCBtZXNzYWdlOiBtZXNzYWdlLCB0eXBlOiBjYXRlZ29yeSB9KTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KGNoaWxkQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55Pikge1xuICAgIHRoaXMuZWxlbWVudFNlcnZpY2UuZGVzdHJveUVsZW1lbnQoY2hpbGRDb21wb25lbnRSZWYpO1xuICAgIGlmICh0aGlzLmNvdW50Tm90aWZpY2F0aW9ucyA+IDApIHtcbiAgICAgIHRoaXMuY291bnROb3RpZmljYXRpb25zLS07XG4gICAgICBpZiAodGhpcy5RdWV1ZS5sZW5ndGggPj0gMSkge1xuICAgICAgICB0aGlzLmFwcGVuZENvbXBvbmVudFRvQ29udGFpbmVyKHRoaXMuUXVldWVbMF0uaGVhZGVyLCB0aGlzLlF1ZXVlWzBdLm1lc3NhZ2UsIHRoaXMuUXVldWVbMF0udHlwZSk7XG4gICAgICAgIHRoaXMuUXVldWUuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGRlc3Ryb3lBbGwoKSB7XG4gICAgdGhpcy5RdWV1ZSA9IFtdO1xuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY21wID0+IHtcbiAgICAgIGNtcC5vbkNsb3NlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLmNvdW50Tm90aWZpY2F0aW9ucyA9IDA7XG4gICAgXG4gIH1cblxuICBpbnNlcnRUaW1lT3V0KGNoaWxkQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55Pil7XG4gICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UucHJvZ3Jlc3NyZXF1aXJlZCA9IHRydWU7XG4gICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UucHJvZ3Jlc3NUaW1lID0gdGhpcy5saWJDb25maWcudGltZU91dDtcbiAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5hY3R1YWxUaW1lID0gIHRoaXMubGliQ29uZmlnLnRpbWVPdXQ7XG4gIH1cblxuXG4gIGRlZmluZUNvbXBvbmVudFZhbHVlcyhjaGlsZENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4sIGhlYWRlciwgbWVzc2FnZSwgdHlwZSlcbiAge1xuICAgIGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLmhlYWRlciA9IGhlYWRlcjtcbiAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS50eXBlID0gdHlwZTtcbiAgICBjb25zdCBzdWIgPSBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5kZXN0cm95LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZGVzdHJveShjaGlsZENvbXBvbmVudFJlZik7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5saWJDb25maWcudGltZU91dFJlcXVpcmVkQ2F0ZWdvcmllcy5pbmNsdWRlcyh0eXBlKSkgeyAgXG4gICAgICB0aGlzLmluc2VydFRpbWVPdXQoY2hpbGRDb21wb25lbnRSZWYpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=