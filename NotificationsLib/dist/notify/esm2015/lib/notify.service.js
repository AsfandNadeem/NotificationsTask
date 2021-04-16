import { __awaiter } from "tslib";
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
        return __awaiter(this, void 0, void 0, function* () {
            if (this.countNotifications >= this.maxLimit) {
                yield this.groupOlder();
            }
            this.appendComponentToContainer(header, message, category);
        });
    }
    destroy(childComponentRef) {
        this.elementService.destroyElement(childComponentRef);
        if (this.countNotifications > 0) {
            this.countNotifications--;
            // if (this.Queue.length >= 1) {
            //   this.appendComponentToContainer(this.Queue[0].header, this.Queue[0].message, this.Queue[0].type);
            //   this.Queue.shift();
            // }
        }
    }
    groupOlder() {
        this.Queue.push({ header: this._children[0].header, message: this._children[0].message, type: this._children[0].type });
        this._children[0].onClose();
        this._children.shift();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFnQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUE2RCxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFHaEgsT0FBTyxFQUFhLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBS3JELE1BQU0sT0FBTyxhQUFhO0lBU3hCLFlBQW9CLGNBQXdDLEVBQ2xELE1BQXNCLEVBQW9DLE1BQU07UUFEdEQsbUJBQWMsR0FBZCxjQUFjLENBQTBCO1FBQ2xELFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQW9DLFdBQU0sR0FBTixNQUFNLENBQUE7UUFSMUUsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLHVCQUFrQixHQUFHLENBQUMsQ0FBQztRQUN2QixVQUFLLEdBQUcsS0FBSyxFQUFpQixDQUFDO1FBQ3ZCLGNBQVMsR0FBc0IsRUFBRSxDQUFDO1FBT3hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzdCLElB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QUFJO1FBQy9FLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzNDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzdDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLE1BQU0sR0FBRyxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUM1RCxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzRCxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDOzswRUF6RlUsYUFBYSx3RkFVa0IsZ0JBQWdCO3FEQVYvQyxhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNO3VGQUVQLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFXb0MsTUFBTTt1QkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgRW1iZWRkZWRWaWV3UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFbGVtZW50QXR0YWNobWVudFNlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnRBdHRhY2htZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgbGliY29uZmlnLCBMaWJDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9saWJjb25maWcnO1xuaW1wb3J0IHsgSU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOb3RpZnlDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL25vdGlmeS1jb250YWluZXIvbm90aWZ5LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWZ5Q29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZnkuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZ5U2VydmljZSB7XG4gIHByaXZhdGUgbGliQ29uZmlnOiBsaWJjb25maWc7XG4gIG1heExpbWl0ID0gMDtcbiAgY291bnROb3RpZmljYXRpb25zID0gMDtcbiAgUXVldWUgPSBBcnJheTxJTm90aWZpY2F0aW9uPigpO1xuICBwcml2YXRlIF9jaGlsZHJlbjogTm90aWZ5Q29tcG9uZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBOb3RpZnlDb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBOb3RpZnlDb250YWluZXJSZWY6IENvbXBvbmVudFJlZjxOb3RpZnlDb250YWluZXJDb21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFNlcnZpY2U6IEVsZW1lbnRBdHRhY2htZW50U2VydmljZSxcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsIEBJbmplY3QoTGliQ29uZmlnU2VydmljZSkgcHJpdmF0ZSBjb25maWcpIHtcblxuICAgIHRoaXMuTm90aWZ5Q29udGFpbmVyUmVmID0gdGhpcy5lbGVtZW50U2VydmljZS5jcmVhdGVDb21wb25lbnRpbkRvbShOb3RpZnlDb250YWluZXJDb21wb25lbnQpO1xuICAgIHRoaXMuTm90aWZ5Q29udGFpbmVyRWxlbWVudCA9IHRoaXMuZWxlbWVudFNlcnZpY2UuZ2V0RWxlbWVudCh0aGlzLk5vdGlmeUNvbnRhaW5lclJlZik7XG4gICAgdGhpcy5lbGVtZW50U2VydmljZS5hZGRDaGlsZHRvRWxlbWVudCh0aGlzLk5vdGlmeUNvbnRhaW5lckVsZW1lbnQpO1xuICAgIHRoaXMubGliQ29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgdGhpcy5tYXhMaW1pdCA9IHRoaXMubGliQ29uZmlnLm1heExpbWl0O1xuICB9XG5cblxuICBwcml2YXRlIGFwcGVuZENvbXBvbmVudFRvQ29udGFpbmVyKGhlYWRlcjogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIC8vQ3JlYXRlIENoaWxkIENvbXBvbmVudFxuICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50UmVmID0gdGhpcy5lbGVtZW50U2VydmljZS5jcmVhdGVDb21wb25lbnRpbkRvbShOb3RpZnlDb21wb25lbnQpO1xuICAgIC8vR2V0IGNoaWxkIENvbXBvbmVudFxuICAgIGNvbnN0IGNoaWxkRWxlbWVudCA9IHRoaXMuZWxlbWVudFNlcnZpY2UuZ2V0RWxlbWVudChjaGlsZENvbXBvbmVudFJlZik7XG5cbiAgICB0aGlzLmRlZmluZUNvbXBvbmVudFZhbHVlcyhjaGlsZENvbXBvbmVudFJlZiwgaGVhZGVyLCBtZXNzYWdlLCB0eXBlKTtcbiAgICAvL0FkZCBjaGlsZCBjb21wb25lbnQgdG8gcGFyZW50XG4gICAgdGhpcy5lbGVtZW50U2VydmljZS5hZGRDaGlsZHRvRWxlbWVudChjaGlsZEVsZW1lbnQsIHRoaXMuTm90aWZ5Q29udGFpbmVyRWxlbWVudCk7XG4gICAgdGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgdGhpcy5jb3VudE5vdGlmaWNhdGlvbnMrKztcblxuXG4gIH1cblxuICBhc3luYyBvcGVuKGhlYWRlciwgbWVzc2FnZSwgY2F0ZWdvcnkpIHtcbiAgICBpZiAodGhpcy5jb3VudE5vdGlmaWNhdGlvbnMgPj0gdGhpcy5tYXhMaW1pdCkge1xuICAgICAgYXdhaXQgdGhpcy5ncm91cE9sZGVyKCk7XG4gICAgfVxuICAgIHRoaXMuYXBwZW5kQ29tcG9uZW50VG9Db250YWluZXIoaGVhZGVyLCBtZXNzYWdlLCBjYXRlZ29yeSk7XG4gIH1cblxuICBkZXN0cm95KGNoaWxkQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55Pikge1xuICAgIHRoaXMuZWxlbWVudFNlcnZpY2UuZGVzdHJveUVsZW1lbnQoY2hpbGRDb21wb25lbnRSZWYpO1xuICAgIGlmICh0aGlzLmNvdW50Tm90aWZpY2F0aW9ucyA+IDApIHtcbiAgICAgIHRoaXMuY291bnROb3RpZmljYXRpb25zLS07XG4gICAgICAvLyBpZiAodGhpcy5RdWV1ZS5sZW5ndGggPj0gMSkge1xuICAgICAgLy8gICB0aGlzLmFwcGVuZENvbXBvbmVudFRvQ29udGFpbmVyKHRoaXMuUXVldWVbMF0uaGVhZGVyLCB0aGlzLlF1ZXVlWzBdLm1lc3NhZ2UsIHRoaXMuUXVldWVbMF0udHlwZSk7XG4gICAgICAvLyAgIHRoaXMuUXVldWUuc2hpZnQoKTtcbiAgICAgIC8vIH1cbiAgICB9XG4gIH1cblxuICBncm91cE9sZGVyKCkge1xuICAgIHRoaXMuUXVldWUucHVzaCh7IGhlYWRlcjogdGhpcy5fY2hpbGRyZW5bMF0uaGVhZGVyLCBtZXNzYWdlOiB0aGlzLl9jaGlsZHJlblswXS5tZXNzYWdlLCB0eXBlOiB0aGlzLl9jaGlsZHJlblswXS50eXBlIH0pO1xuICAgIHRoaXMuX2NoaWxkcmVuWzBdLm9uQ2xvc2UoKTtcbiAgICB0aGlzLl9jaGlsZHJlbi5zaGlmdCgpO1xuICB9XG5cblxuICBkZXN0cm95QWxsKCkge1xuICAgIHRoaXMuUXVldWUgPSBbXTtcbiAgICB0aGlzLl9jaGlsZHJlbi5mb3JFYWNoKGNtcCA9PiB7XG4gICAgICBjbXAub25DbG9zZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5jb3VudE5vdGlmaWNhdGlvbnMgPSAwO1xuXG4gIH1cblxuICBpbnNlcnRUaW1lT3V0KGNoaWxkQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55Pikge1xuICAgIGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLnByb2dyZXNzcmVxdWlyZWQgPSB0cnVlO1xuICAgIGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLnByb2dyZXNzVGltZSA9IHRoaXMubGliQ29uZmlnLnRpbWVPdXQ7XG4gICAgY2hpbGRDb21wb25lbnRSZWYuaW5zdGFuY2UuYWN0dWFsVGltZSA9IHRoaXMubGliQ29uZmlnLnRpbWVPdXQ7XG4gIH1cblxuXG4gIGRlZmluZUNvbXBvbmVudFZhbHVlcyhjaGlsZENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4sIGhlYWRlciwgbWVzc2FnZSwgdHlwZSkge1xuICAgIGNoaWxkQ29tcG9uZW50UmVmLmluc3RhbmNlLmhlYWRlciA9IGhlYWRlcjtcbiAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS50eXBlID0gdHlwZTtcbiAgICBjb25zdCBzdWIgPSBjaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5kZXN0cm95LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZGVzdHJveShjaGlsZENvbXBvbmVudFJlZik7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5saWJDb25maWcudGltZU91dFJlcXVpcmVkQ2F0ZWdvcmllcy5pbmNsdWRlcyh0eXBlKSkge1xuICAgICAgdGhpcy5pbnNlcnRUaW1lT3V0KGNoaWxkQ29tcG9uZW50UmVmKTtcbiAgICB9XG4gIH1cblxufVxuIl19