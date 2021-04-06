import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./notify.service";
export class NotifyComponent {
    // @HostBinding('class.redbackground') warning: boolean;
    constructor(NotifyService, renderer) {
        this.NotifyService = NotifyService;
        this.renderer = renderer;
        this.type = '';
        this.destroy = new EventEmitter();
    }
    ngOnInit() {
    }
    getBackground() {
        if (this.type === 'warning') {
            return 'orange';
        }
        else if (this.type == 'error') {
            return 'red';
        }
        else {
            return 'blue';
        }
    }
    onClose() {
        this.destroy.emit();
    }
}
NotifyComponent.ɵfac = function NotifyComponent_Factory(t) { return new (t || NotifyComponent)(i0.ɵɵdirectiveInject(i1.NotifyService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
NotifyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NotifyComponent, selectors: [["lib-notify"]], inputs: { header: "header", message: "message", type: "type" }, outputs: { destroy: "destroy" }, decls: 12, vars: 4, consts: [[1, "card", "container", "my-4", "stack-top"], [1, "card-header", "container-fluid"], [1, "row"], [1, "col-10"], [1, "col-2"], ["type", "button", 3, "click"], [1, "card-body", 2, "text-align", "center"], [1, "card-text"]], template: function NotifyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "h3");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵelementStart(7, "a", 5);
        i0.ɵɵlistener("click", function NotifyComponent_Template_a_click_7_listener() { return ctx.onClose(); });
        i0.ɵɵtext(8, "X ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 6);
        i0.ɵɵelementStart(10, "p", 7);
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("background-color", ctx.getBackground());
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.header);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(ctx.message);
    } }, styles: [".stack-top[_ngcontent-%COMP%]{padding:0;width:20%;box-shadow:0 10px 19px 10px rgba(0,0,0,.04);color:#000;top:\"0\";right:\"50%\";display:flex;transform:translate(195%,calc(100% - 940px));z-index:1}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotifyComponent, [{
        type: Component,
        args: [{
                selector: 'lib-notify',
                templateUrl: './notify.component.html',
                styleUrls: ['./notify.component.css'
                ]
            }]
    }], function () { return [{ type: i1.NotifyService }, { type: i0.Renderer2 }]; }, { header: [{
            type: Input
        }], message: [{
            type: Input
        }], type: [{
            type: Input
        }], destroy: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25vdGlmeS9zcmMvbGliL25vdGlmeS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFlLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBUWxELE1BQU0sT0FBTyxlQUFlO0lBTTFCLHdEQUF3RDtJQUN4RCxZQUFvQixhQUE0QixFQUFRLFFBQW1CO1FBQXZELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVEsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUpsRSxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1QsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBSzFELENBQUM7SUFFRCxRQUFRO0lBRVIsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLE9BQU8sUUFBUSxDQUFDO1NBQ2pCO2FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQTtTQUNiO2FBQ0k7WUFDSCxPQUFPLE1BQU0sQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7OzhFQTdCVSxlQUFlO29EQUFmLGVBQWU7UUNaNUIsOEJBQTRDO1FBQ3hDLDhCQUFtRjtRQUMvRSw4QkFBaUI7UUFDYiw4QkFBb0I7UUFDaEIsMEJBQUk7UUFBQSxZQUFVO1FBQUEsaUJBQUs7UUFDdkIsaUJBQU07UUFDTiw4QkFBbUI7UUFDZiw0QkFBcUM7UUFBcEIsdUZBQVMsYUFBUyxJQUFDO1FBQUMsa0JBQ3JDO1FBQUEsaUJBQUk7UUFDUixpQkFBTTtRQUNWLGlCQUFNO1FBQ1YsaUJBQU07UUFFTiw4QkFBbUQ7UUFDL0MsNkJBQXFCO1FBQUEsYUFBVztRQUFBLGlCQUFJO1FBQ3hDLGlCQUFNO1FBQ1YsaUJBQU07O1FBZnVDLGVBQXlDO1FBQXpDLHVEQUF5QztRQUdsRSxlQUFVO1FBQVYsZ0NBQVU7UUFVRCxlQUFXO1FBQVgsaUNBQVc7O3VGREYzQixlQUFlO2NBTjNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCO2lCQUNuQzthQUNGO3dGQUVVLE1BQU07a0JBQWQsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNJLE9BQU87a0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RpZnlTZXJ2aWNlIH0gZnJvbSAnLi9ub3RpZnkuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbm90aWZ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGlmeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25vdGlmeS5jb21wb25lbnQuY3NzJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGUgPSAnJztcbiAgQE91dHB1dCgpIGRlc3Ryb3k6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBcbiAgLy8gQEhvc3RCaW5kaW5nKCdjbGFzcy5yZWRiYWNrZ3JvdW5kJykgd2FybmluZzogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBOb3RpZnlTZXJ2aWNlOiBOb3RpZnlTZXJ2aWNlLHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gIH1cblxuICBnZXRCYWNrZ3JvdW5kKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3dhcm5pbmcnKSB7XG4gICAgICByZXR1cm4gJ29yYW5nZSc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSAnZXJyb3InKSB7XG4gICAgICByZXR1cm4gJ3JlZCdcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gJ2JsdWUnO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95LmVtaXQoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmQgY29udGFpbmVyICBteS00IHN0YWNrLXRvcFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBjb250YWluZXItZmx1aWRcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImdldEJhY2tncm91bmQoKVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwXCI+XG4gICAgICAgICAgICAgICAgPGgzPnt7aGVhZGVyfX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICA8YSB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uQ2xvc2UoKVwiPlhcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+XG4gICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+e3ttZXNzYWdlfX08L3A+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=