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
        this.Queue = [];
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
            this.destroy(childComponentRef, type);
        });
        //Add child component to parent
        this.elementService.addChildtoElement(childElement, this.NotifyContainerElement);
        // setTimeout(() => {
        //   this.destroy(childComponentRef, type);
        // }, 5000);
    }
    open(header, message, category) {
        if (this.maxLimit <= 5) {
            this.appendComponentToContainer(header, message + this.maxLimit, category);
            this.maxLimit++;
            console.log(this.maxLimit);
        }
        else {
            this.Queue.push(message);
        }
    }
    destroy(childComponentRef, type) {
        this.elementService.destroyElement(childComponentRef);
        if (this.maxLimit > 0) {
            this.maxLimit--;
            console.log(this.maxLimit);
            if (this.Queue.length >= 1) {
                this.appendComponentToContainer('Header', this.Queue.shift() + ' ' + this.maxLimit + ' ' + this.Queue.length, type);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQTZELFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVoSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUtyRCxNQUFNLE9BQU8sYUFBYTtJQU94QixZQUFvQixjQUF3QyxFQUNsRCxNQUFzQjtRQURaLG1CQUFjLEdBQWQsY0FBYyxDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQU5oQyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQU9ULElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDckUsQ0FBQztJQUdPLDBCQUEwQixDQUFDLE1BQWEsRUFBRSxPQUFlLEVBQUUsSUFBWTtRQUM3RSx3QkFBd0I7UUFDeEIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3BGLHFCQUFxQjtRQUNyQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXZFLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRTNDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRTdDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBSXZDLE1BQU0sR0FBRyxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUM1RCxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUNILCtCQUErQjtRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUdqRixxQkFBcUI7UUFDckIsMkNBQTJDO1FBQzNDLFlBQVk7SUFDZCxDQUFDO0lBRUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUTtRQUM1QixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVCO2FBQ0k7WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsaUJBQW9DLEVBQUUsSUFBWTtRQUN4RCxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RELElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUMxQixJQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3JIO1NBQ0Y7SUFDSCxDQUFDOzswRUEvRFUsYUFBYTtxREFBYixhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNO3VGQUVQLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBFbWJlZGRlZFZpZXdSZWYsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbGVtZW50QXR0YWNobWVudFNlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnRBdHRhY2htZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWZ5Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZnktY29udGFpbmVyL25vdGlmeS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdGlmeUNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZ5LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmeVNlcnZpY2Uge1xuXG4gIG1heExpbWl0ID0gMTtcbiAgUXVldWUgPSBbXTtcblxuICBwcml2YXRlIE5vdGlmeUNvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIE5vdGlmeUNvbnRhaW5lclJlZjogQ29tcG9uZW50UmVmPE5vdGlmeUNvbnRhaW5lckNvbXBvbmVudD47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFNlcnZpY2U6IEVsZW1lbnRBdHRhY2htZW50U2VydmljZSxcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYpIHtcblxuICAgIHRoaXMuTm90aWZ5Q29udGFpbmVyUmVmID0gdGhpcy5lbGVtZW50U2VydmljZS5jcmVhdGVDb21wb25lbnRpbkRvbShOb3RpZnlDb250YWluZXJDb21wb25lbnQpO1xuICAgIHRoaXMuTm90aWZ5Q29udGFpbmVyRWxlbWVudCA9IHRoaXMuZWxlbWVudFNlcnZpY2UuZ2V0RWxlbWVudCh0aGlzLk5vdGlmeUNvbnRhaW5lclJlZik7XG4gICAgdGhpcy5lbGVtZW50U2VydmljZS5hZGRDaGlsZHRvRWxlbWVudCh0aGlzLk5vdGlmeUNvbnRhaW5lckVsZW1lbnQpO1xuICB9XG5cblxuICBwcml2YXRlIGFwcGVuZENvbXBvbmVudFRvQ29udGFpbmVyKGhlYWRlcjpzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XG4gICAgLy9DcmVhdGUgQ2hpbGQgQ29tcG9uZW50XG4gICAgY29uc3QgY2hpbGRDb21wb25lbnRSZWYgPSB0aGlzLmVsZW1lbnRTZXJ2aWNlLmNyZWF0ZUNvbXBvbmVudGluRG9tKE5vdGlmeUNvbXBvbmVudCk7XG4gICAgLy9HZXQgY2hpbGQgQ29tcG9uZW50XG4gICAgY29uc3QgY2hpbGRFbGVtZW50ID0gdGhpcy5lbGVtZW50U2VydmljZS5nZXRFbGVtZW50KGNoaWxkQ29tcG9uZW50UmVmKTtcblxuICAgIGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLmhlYWRlciA9IGhlYWRlcjtcblxuICAgIGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UudHlwZSA9IHR5cGU7XG5cblxuXG4gICAgY29uc3Qgc3ViID0gY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UuZGVzdHJveS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRlc3Ryb3koY2hpbGRDb21wb25lbnRSZWYsIHR5cGUpO1xuICAgIH0pO1xuICAgIC8vQWRkIGNoaWxkIGNvbXBvbmVudCB0byBwYXJlbnRcbiAgICB0aGlzLmVsZW1lbnRTZXJ2aWNlLmFkZENoaWxkdG9FbGVtZW50KGNoaWxkRWxlbWVudCwgdGhpcy5Ob3RpZnlDb250YWluZXJFbGVtZW50KTtcblxuXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICB0aGlzLmRlc3Ryb3koY2hpbGRDb21wb25lbnRSZWYsIHR5cGUpO1xuICAgIC8vIH0sIDUwMDApO1xuICB9XG5cbiAgb3BlbihoZWFkZXIsIG1lc3NhZ2UsIGNhdGVnb3J5KSB7XG4gICAgaWYgKHRoaXMubWF4TGltaXQgPD0gNSkge1xuICAgICAgdGhpcy5hcHBlbmRDb21wb25lbnRUb0NvbnRhaW5lcihoZWFkZXIsIG1lc3NhZ2UgKyB0aGlzLm1heExpbWl0LCBjYXRlZ29yeSk7XG4gICAgICB0aGlzLm1heExpbWl0Kys7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm1heExpbWl0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLlF1ZXVlLnB1c2gobWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveShjaGlsZENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4sIHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuZWxlbWVudFNlcnZpY2UuZGVzdHJveUVsZW1lbnQoY2hpbGRDb21wb25lbnRSZWYpO1xuICAgIGlmICh0aGlzLm1heExpbWl0ID4gMCkge1xuICAgICAgdGhpcy5tYXhMaW1pdC0tO1xuICAgICAgY29uc29sZS5sb2codGhpcy5tYXhMaW1pdCk7XG4gICAgICBpZiAodGhpcy5RdWV1ZS5sZW5ndGggPj0gMSkge1xuICAgICAgICB0aGlzLmFwcGVuZENvbXBvbmVudFRvQ29udGFpbmVyKCdIZWFkZXInLCB0aGlzLlF1ZXVlLnNoaWZ0KCkgKyAnICcgKyB0aGlzLm1heExpbWl0ICsgJyAnICsgdGhpcy5RdWV1ZS5sZW5ndGgsIHR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuXG5cbn1cbiJdfQ==