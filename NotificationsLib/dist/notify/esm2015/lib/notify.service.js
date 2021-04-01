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
        if (this.maxLimit > 0) {
            this.maxLimit--;
            if (this.Queue.length >= 1) {
                this.appendComponentToContainer(this.Queue[0].header, this.Queue[0].message, this.Queue[0].type);
                this.Queue.shift();
            }
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQTZELFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUdoSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUtyRCxNQUFNLE9BQU8sYUFBYTtJQU94QixZQUFvQixjQUF3QyxFQUNsRCxNQUFzQjtRQURaLG1CQUFjLEdBQWQsY0FBYyxDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQU5oQyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsVUFBSyxHQUFHLEtBQUssRUFBaUIsQ0FBQztRQU83QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFHTywwQkFBMEIsQ0FBQyxNQUFjLEVBQUUsT0FBZSxFQUFFLElBQVk7UUFDOUUsd0JBQXdCO1FBQ3hCLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNwRixxQkFBcUI7UUFDckIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV2RSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUUzQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUU3QyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUl2QyxNQUFNLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDNUQsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNILCtCQUErQjtRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUdqRixJQUFJLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDbEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFHLGlCQUFpQixFQUNwQjtvQkFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7aUJBQUM7WUFDcEMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ1g7SUFDSCxDQUFDO0lBRUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUTtRQUM1QixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO2FBQ0k7WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztTQUNqRTtJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsaUJBQW9DO1FBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdEQsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzFCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3BCO1NBQ0Y7SUFDSCxDQUFDOzswRUFqRVUsYUFBYTtxREFBYixhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNO3VGQUVQLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBFbWJlZGRlZFZpZXdSZWYsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbGVtZW50QXR0YWNobWVudFNlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnRBdHRhY2htZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgSU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOb3RpZnlDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL25vdGlmeS1jb250YWluZXIvbm90aWZ5LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWZ5Q29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZnkuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZ5U2VydmljZSB7XG5cbiAgbWF4TGltaXQgPSAxO1xuICBRdWV1ZSA9IEFycmF5PElOb3RpZmljYXRpb24+KCk7XG5cbiAgcHJpdmF0ZSBOb3RpZnlDb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBOb3RpZnlDb250YWluZXJSZWY6IENvbXBvbmVudFJlZjxOb3RpZnlDb250YWluZXJDb21wb25lbnQ+O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRTZXJ2aWNlOiBFbGVtZW50QXR0YWNobWVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7XG5cbiAgICB0aGlzLk5vdGlmeUNvbnRhaW5lclJlZiA9IHRoaXMuZWxlbWVudFNlcnZpY2UuY3JlYXRlQ29tcG9uZW50aW5Eb20oTm90aWZ5Q29udGFpbmVyQ29tcG9uZW50KTtcbiAgICB0aGlzLk5vdGlmeUNvbnRhaW5lckVsZW1lbnQgPSB0aGlzLmVsZW1lbnRTZXJ2aWNlLmdldEVsZW1lbnQodGhpcy5Ob3RpZnlDb250YWluZXJSZWYpO1xuICAgIHRoaXMuZWxlbWVudFNlcnZpY2UuYWRkQ2hpbGR0b0VsZW1lbnQodGhpcy5Ob3RpZnlDb250YWluZXJFbGVtZW50KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBhcHBlbmRDb21wb25lbnRUb0NvbnRhaW5lcihoZWFkZXI6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcbiAgICAvL0NyZWF0ZSBDaGlsZCBDb21wb25lbnRcbiAgICBjb25zdCBjaGlsZENvbXBvbmVudFJlZiA9IHRoaXMuZWxlbWVudFNlcnZpY2UuY3JlYXRlQ29tcG9uZW50aW5Eb20oTm90aWZ5Q29tcG9uZW50KTtcbiAgICAvL0dldCBjaGlsZCBDb21wb25lbnRcbiAgICBjb25zdCBjaGlsZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRTZXJ2aWNlLmdldEVsZW1lbnQoY2hpbGRDb21wb25lbnRSZWYpO1xuXG4gICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UuaGVhZGVyID0gaGVhZGVyO1xuXG4gICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UubWVzc2FnZSA9IG1lc3NhZ2U7XG5cbiAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS50eXBlID0gdHlwZTtcblxuXG5cbiAgICBjb25zdCBzdWIgPSBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5kZXN0cm95LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZGVzdHJveShjaGlsZENvbXBvbmVudFJlZik7XG4gICAgfSk7XG4gICAgLy9BZGQgY2hpbGQgY29tcG9uZW50IHRvIHBhcmVudFxuICAgIHRoaXMuZWxlbWVudFNlcnZpY2UuYWRkQ2hpbGR0b0VsZW1lbnQoY2hpbGRFbGVtZW50LCB0aGlzLk5vdGlmeUNvbnRhaW5lckVsZW1lbnQpO1xuXG5cbiAgICBpZiAodHlwZSA9PSBcImluZm9cIikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmKGNoaWxkQ29tcG9uZW50UmVmKVxuICAgICAgICB7dGhpcy5kZXN0cm95KGNoaWxkQ29tcG9uZW50UmVmKTt9XG4gICAgICB9LCAxMDAwMCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbihoZWFkZXIsIG1lc3NhZ2UsIGNhdGVnb3J5KSB7XG4gICAgaWYgKHRoaXMubWF4TGltaXQgPD0gNSkge1xuICAgICAgdGhpcy5hcHBlbmRDb21wb25lbnRUb0NvbnRhaW5lcihoZWFkZXIsIG1lc3NhZ2UgKyB0aGlzLm1heExpbWl0LCBjYXRlZ29yeSk7XG4gICAgICB0aGlzLm1heExpbWl0Kys7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5RdWV1ZS5wdXNoKHtoZWFkZXI6aGVhZGVyLG1lc3NhZ2U6bWVzc2FnZSwgdHlwZTpjYXRlZ29yeX0pO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koY2hpbGRDb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KSB7XG4gICAgdGhpcy5lbGVtZW50U2VydmljZS5kZXN0cm95RWxlbWVudChjaGlsZENvbXBvbmVudFJlZik7XG4gICAgaWYgKHRoaXMubWF4TGltaXQgPiAwKSB7XG4gICAgICB0aGlzLm1heExpbWl0LS07XG4gICAgICBpZiAodGhpcy5RdWV1ZS5sZW5ndGggPj0gMSkge1xuICAgICAgICB0aGlzLmFwcGVuZENvbXBvbmVudFRvQ29udGFpbmVyKHRoaXMuUXVldWVbMF0uaGVhZGVyLCB0aGlzLlF1ZXVlWzBdLm1lc3NhZ2UsIHRoaXMuUXVldWVbMF0udHlwZSk7XG4gICAgICAgIHRoaXMuUXVldWUuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cblxuXG59XG4iXX0=