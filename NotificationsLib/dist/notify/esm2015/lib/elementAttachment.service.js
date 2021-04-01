import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ElementAttachmentService {
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    // 1. Create a Cotntainer component reference from the component 
    createComponentinDom(component) {
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);
        return componentRef;
    }
    // 3. Get DOM element from component
    getElement(componentRef) {
        return componentRef.hostView
            .rootNodes[0];
    }
    // 4. Append DOM element to the body
    addChildtoElement(child, parent = document.body) {
        parent.appendChild(child);
    }
    //5 Destroy Element
    destroyElement(componentRef) {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
    }
}
ElementAttachmentService.ɵfac = function ElementAttachmentService_Factory(t) { return new (t || ElementAttachmentService)(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.Injector)); };
ElementAttachmentService.ɵprov = i0.ɵɵdefineInjectable({ token: ElementAttachmentService, factory: ElementAttachmentService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ElementAttachmentService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudEF0dGFjaG1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25vdGlmeS9zcmMvbGliL2VsZW1lbnRBdHRhY2htZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxFQUE0QixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7O0FBS3BFLE1BQU0sT0FBTyx3QkFBd0I7SUFFakMsWUFDWSx3QkFBa0QsRUFDbEQsTUFBc0IsRUFDdEIsUUFBa0I7UUFGbEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBRTlCLENBQUM7SUFDRCxpRUFBaUU7SUFDakUsb0JBQW9CLENBQUMsU0FBYztRQUMvQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsd0JBQXdCO2FBQzdDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQzthQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNCLDhFQUE4RTtRQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUVELG9DQUFvQztJQUNwQyxVQUFVLENBQUMsWUFBK0I7UUFDdEMsT0FBUSxZQUFZLENBQUMsUUFBaUM7YUFDakQsU0FBUyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLGlCQUFpQixDQUFDLEtBQWtCLEVBQUUsU0FBc0IsUUFBUSxDQUFDLElBQUk7UUFDckUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsbUJBQW1CO0lBQ25CLGNBQWMsQ0FBQyxZQUErQjtRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dHQWxDUSx3QkFBd0I7Z0VBQXhCLHdCQUF3QixXQUF4Qix3QkFBd0IsbUJBRnJCLE1BQU07dUZBRVQsd0JBQXdCO2NBSHBDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVtYmVkZGVkVmlld1JlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25SZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRWxlbWVudEF0dGFjaG1lbnRTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG5cbiAgICB9XG4gICAgLy8gMS4gQ3JlYXRlIGEgQ290bnRhaW5lciBjb21wb25lbnQgcmVmZXJlbmNlIGZyb20gdGhlIGNvbXBvbmVudCBcbiAgICBjcmVhdGVDb21wb25lbnRpbkRvbShjb21wb25lbnQ6IGFueSk6IENvbXBvbmVudFJlZjxhbnk+IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICAgICAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpXG4gICAgICAgICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXG4gICAgICAgIC8vIDIuIEF0dGFjaCBjb21wb25lbnQgdG8gdGhlIGFwcFJlZiBzbyB0aGF0IGl0J3MgaW5zaWRlIHRoZSBuZyBjb21wb25lbnQgdHJlZVxuICAgICAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZWY7XG4gICAgfVxuXG4gICAgLy8gMy4gR2V0IERPTSBlbGVtZW50IGZyb20gY29tcG9uZW50XG4gICAgZ2V0RWxlbWVudChjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcbiAgICAgICAgICAgIC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gNC4gQXBwZW5kIERPTSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgYWRkQ2hpbGR0b0VsZW1lbnQoY2hpbGQ6IEhUTUxFbGVtZW50LCBwYXJlbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cblxuICAgIC8vNSBEZXN0cm95IEVsZW1lbnRcbiAgICBkZXN0cm95RWxlbWVudChjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KSB7XG4gICAgICAgIHRoaXMuYXBwUmVmLmRldGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICB9XG5cbn0iXX0=