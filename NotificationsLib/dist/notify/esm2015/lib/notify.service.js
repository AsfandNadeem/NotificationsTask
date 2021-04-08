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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQTZELFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUdoSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUtyRCxNQUFNLE9BQU8sYUFBYTtJQVF4QixZQUFvQixjQUF3QyxFQUNsRCxNQUFzQjtRQURaLG1CQUFjLEdBQWQsY0FBYyxDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQVJoQyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLFVBQUssR0FBRyxLQUFLLEVBQWlCLENBQUM7UUFDdkIsY0FBUyxHQUFvQyxFQUFFLENBQUM7UUFPdEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBR08sMEJBQTBCLENBQUMsTUFBYyxFQUFFLE9BQWUsRUFBRSxJQUFZO1FBQzlFLHdCQUF3QjtRQUN4QixNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEYscUJBQXFCO1FBQ3JCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFdkUsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFM0MsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFN0MsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFdkMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFJekMsTUFBTSxHQUFHLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzVELEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDSCwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxQixJQUFJLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDbEIsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDekMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUNuRCxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUNoRCxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUM5QyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtvQkFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2lCQUNqQztZQUNILENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNYO0lBQ0gsQ0FBQztJQUVELElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVE7UUFDNUIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMzQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM1RDthQUNJO1lBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDdkU7SUFDSCxDQUFDO0lBRUQsT0FBTyxDQUFDLGlCQUFvQztRQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RELENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDckMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDM0M7UUFDRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzFCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3BCO1NBQ0Y7SUFDSCxDQUFDO0lBR0QsVUFBVTtRQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDOzswRUFwRlUsYUFBYTtxREFBYixhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNO3VGQUVQLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBFbWJlZGRlZFZpZXdSZWYsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbGVtZW50QXR0YWNobWVudFNlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnRBdHRhY2htZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgSU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOb3RpZnlDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL25vdGlmeS1jb250YWluZXIvbm90aWZ5LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWZ5Q29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZnkuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZ5U2VydmljZSB7XG4gIG1heExpbWl0ID0gNTtcbiAgY291bnROb3RpZmljYXRpb25zID0gMDtcbiAgUXVldWUgPSBBcnJheTxJTm90aWZpY2F0aW9uPigpO1xuICBwcml2YXRlIF9jaGlsZHJlbjogQ29tcG9uZW50UmVmPE5vdGlmeUNvbXBvbmVudD5bXSA9IFtdO1xuICBwcml2YXRlIE5vdGlmeUNvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIE5vdGlmeUNvbnRhaW5lclJlZjogQ29tcG9uZW50UmVmPE5vdGlmeUNvbnRhaW5lckNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50U2VydmljZTogRWxlbWVudEF0dGFjaG1lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZikge1xuXG4gICAgdGhpcy5Ob3RpZnlDb250YWluZXJSZWYgPSB0aGlzLmVsZW1lbnRTZXJ2aWNlLmNyZWF0ZUNvbXBvbmVudGluRG9tKE5vdGlmeUNvbnRhaW5lckNvbXBvbmVudCk7XG4gICAgdGhpcy5Ob3RpZnlDb250YWluZXJFbGVtZW50ID0gdGhpcy5lbGVtZW50U2VydmljZS5nZXRFbGVtZW50KHRoaXMuTm90aWZ5Q29udGFpbmVyUmVmKTtcbiAgICB0aGlzLmVsZW1lbnRTZXJ2aWNlLmFkZENoaWxkdG9FbGVtZW50KHRoaXMuTm90aWZ5Q29udGFpbmVyRWxlbWVudCk7XG4gIH1cblxuXG4gIHByaXZhdGUgYXBwZW5kQ29tcG9uZW50VG9Db250YWluZXIoaGVhZGVyOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XG4gICAgLy9DcmVhdGUgQ2hpbGQgQ29tcG9uZW50XG4gICAgY29uc3QgY2hpbGRDb21wb25lbnRSZWYgPSB0aGlzLmVsZW1lbnRTZXJ2aWNlLmNyZWF0ZUNvbXBvbmVudGluRG9tKE5vdGlmeUNvbXBvbmVudCk7XG4gICAgLy9HZXQgY2hpbGQgQ29tcG9uZW50XG4gICAgY29uc3QgY2hpbGRFbGVtZW50ID0gdGhpcy5lbGVtZW50U2VydmljZS5nZXRFbGVtZW50KGNoaWxkQ29tcG9uZW50UmVmKTtcblxuICAgIGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLmhlYWRlciA9IGhlYWRlcjtcblxuICAgIGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UudHlwZSA9IHR5cGU7XG5cbiAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5leGlzdHMgPSB0cnVlO1xuXG5cblxuICAgIGNvbnN0IHN1YiA9IGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLmRlc3Ryb3kuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5kZXN0cm95KGNoaWxkQ29tcG9uZW50UmVmKTtcbiAgICB9KTtcbiAgICAvL0FkZCBjaGlsZCBjb21wb25lbnQgdG8gcGFyZW50XG4gICAgdGhpcy5lbGVtZW50U2VydmljZS5hZGRDaGlsZHRvRWxlbWVudChjaGlsZEVsZW1lbnQsIHRoaXMuTm90aWZ5Q29udGFpbmVyRWxlbWVudCk7XG4gICAgdGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudFJlZik7XG4gICAgdGhpcy5jb3VudE5vdGlmaWNhdGlvbnMrKztcblxuICAgIGlmICh0eXBlID09IFwiaW5mb1wiKSB7XG4gICAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5leGlzdHMgPSB0cnVlO1xuICAgICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UucHJvZ3Jlc3NyZXF1aXJlZCA9IHRydWU7XG4gICAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5wcm9ncmVzc1RpbWUgPSAxMDAwMDtcbiAgICAgIGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLmFjdHVhbFRpbWUgPSAxMDAwMDsgICAgICBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UuZXhpc3RzKSB7XG4gICAgICAgICAgdGhpcy5kZXN0cm95KGNoaWxkQ29tcG9uZW50UmVmKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTA1MDApO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oaGVhZGVyLCBtZXNzYWdlLCBjYXRlZ29yeSkge1xuICAgIGlmICh0aGlzLmNvdW50Tm90aWZpY2F0aW9ucyA8IHRoaXMubWF4TGltaXQpIHtcbiAgICAgIHRoaXMuYXBwZW5kQ29tcG9uZW50VG9Db250YWluZXIoaGVhZGVyLCBtZXNzYWdlLCBjYXRlZ29yeSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5RdWV1ZS5wdXNoKHsgaGVhZGVyOiBoZWFkZXIsIG1lc3NhZ2U6IG1lc3NhZ2UsIHR5cGU6IGNhdGVnb3J5IH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koY2hpbGRDb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KSB7XG4gICAgdGhpcy5lbGVtZW50U2VydmljZS5kZXN0cm95RWxlbWVudChjaGlsZENvbXBvbmVudFJlZik7XG4gICAgKHRoaXMuX2NoaWxkcmVuKS5zcGxpY2UoKHRoaXMuX2NoaWxkcmVuKS5pbmRleE9mKGNoaWxkQ29tcG9uZW50UmVmKSwgMSk7XG4gICAgaWYgKGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLmV4aXN0cykge1xuICAgICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UuZXhpc3RzID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvdW50Tm90aWZpY2F0aW9ucyA+IDApIHtcbiAgICAgIHRoaXMuY291bnROb3RpZmljYXRpb25zLS07XG4gICAgICBpZiAodGhpcy5RdWV1ZS5sZW5ndGggPj0gMSkge1xuICAgICAgICB0aGlzLmFwcGVuZENvbXBvbmVudFRvQ29udGFpbmVyKHRoaXMuUXVldWVbMF0uaGVhZGVyLCB0aGlzLlF1ZXVlWzBdLm1lc3NhZ2UsIHRoaXMuUXVldWVbMF0udHlwZSk7XG4gICAgICAgIHRoaXMuUXVldWUuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGRlc3Ryb3lBbGwoKSB7XG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjbXAgPT4gY21wLmRlc3Ryb3koKSk7XG4gICAgdGhpcy5fY2hpbGRyZW4uc3BsaWNlKDAsIHRoaXMuX2NoaWxkcmVuLmxlbmd0aCk7XG4gICAgdGhpcy5jb3VudE5vdGlmaWNhdGlvbnMgPSAwO1xuICB9XG5cblxuXG5cblxufVxuIl19