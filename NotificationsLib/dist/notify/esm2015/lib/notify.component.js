import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import 'rxjs/add/observable/interval';
import * as i0 from "@angular/core";
import * as i1 from "./notify.service";
import * as i2 from "@angular/common";
const _c0 = function (a0, a1) { return { "bg-warning": a0, "bg-danger": a1 }; };
function NotifyComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "div", 10, 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("width", ctx_r0.setWidth, "%");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c0, ctx_r0.type === "warning", ctx_r0.type === "error"));
} }
export class NotifyComponent {
    constructor(NotifyService, renderer) {
        this.NotifyService = NotifyService;
        this.renderer = renderer;
        this.type = '';
        this.progressrequired = false;
        this.progressTime = 0;
        this.actualTime = 0;
        this.destroy = new EventEmitter();
        this.setWidth = 0;
    }
    ngOnInit() {
        if (this.progressrequired) {
            this.myVar = setTimeout(() => {
                this.onClose();
            }, this.progressTime + 500);
        }
    }
    ngAfterContentInit() {
        if (this.progressrequired) {
            this.setWidthMethod();
            this.mySubscription = interval(100).subscribe((x => {
                this.setProgress();
            }));
        }
    }
    onClose() {
        if (this.progressrequired) {
            this.mySubscription.unsubscribe();
            clearTimeout(this.myVar);
        }
        this.destroy.emit();
    }
    setProgress() {
        if (this.actualTime > 0) {
            this.actualTime = this.actualTime - ((this.progressTime) / 100);
            this.setWidthMethod();
        }
        else {
            this.mySubscription.unsubscribe();
        }
    }
    setWidthMethod() {
        this.setWidth = ((this.actualTime / this.progressTime) * 100);
    }
}
NotifyComponent.ɵfac = function NotifyComponent_Factory(t) { return new (t || NotifyComponent)(i0.ɵɵdirectiveInject(i1.NotifyService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
NotifyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NotifyComponent, selectors: [["lib-notify"]], inputs: { header: "header", message: "message", type: "type", progressrequired: "progressrequired", progressTime: "progressTime", actualTime: "actualTime" }, outputs: { destroy: "destroy" }, decls: 13, vars: 4, consts: [[1, "card", "container", "my-4", "stack-top"], [1, "card-header", "container-fluid", 3, "ngClass"], [1, "row"], [1, "col-10"], [1, "col-2"], ["type", "button", 3, "click"], [1, "card-body"], [1, "card-text"], ["class", "progress", 4, "ngIf"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "active", 3, "ngClass"], ["progressDiv", ""]], template: function NotifyComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(12, NotifyComponent_div_12_Template, 3, 6, "div", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.type);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.header);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(ctx.message);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.progressrequired);
    } }, directives: [i2.NgClass, i2.NgIf], styles: [".stack-top[_ngcontent-%COMP%]{padding:0;border:none;box-shadow:0 10px 19px 10px rgba(0,0,0,.04);color:#000;display:flex;z-index:1}.info[_ngcontent-%COMP%]{background-color:#00f}.warning[_ngcontent-%COMP%]{background-color:#ff8c00}.error[_ngcontent-%COMP%]{background-color:red}.card-body[_ngcontent-%COMP%]{text-align:center}"] });
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
        }], progressrequired: [{
            type: Input
        }], progressTime: [{
            type: Input
        }], actualTime: [{
            type: Input
        }], destroy: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25vdGlmeS9zcmMvbGliL25vdGlmeS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUE0RCxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFM0csT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyw4QkFBOEIsQ0FBQzs7Ozs7O0lDVWxDLDhCQUErQztJQUMzQyw4QkFLTTtJQUNWLGlCQUFNOzs7SUFOZ0IsZUFBMEI7SUFBMUIsNkNBQTBCO0lBQUMsd0dBR3pDOztBRE5aLE1BQU0sT0FBTyxlQUFlO0lBVzFCLFlBQW9CLGFBQTRCLEVBQVMsUUFBbUI7UUFBeEQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBUm5FLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNkLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUcxRCxhQUFRLEdBQUcsQ0FBQyxDQUFDO0lBR2IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBQztZQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsQ0FBQztTQUM3QjtJQUNELENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNMO0lBRUgsQ0FBQztJQUdELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7YUFDSTtZQUNILElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRUQsY0FBYztRQUVaLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7OzhFQXZEVSxlQUFlO29EQUFmLGVBQWU7UUNkNUIsOEJBQTRDO1FBQ3hDLDhCQUEwRDtRQUN0RCw4QkFBaUI7UUFDYiw4QkFBb0I7UUFDaEIsMEJBQUk7UUFBQSxZQUFVO1FBQUEsaUJBQUs7UUFDdkIsaUJBQU07UUFDTiw4QkFBbUI7UUFDZiw0QkFBcUM7UUFBcEIsdUZBQVMsYUFBUyxJQUFDO1FBQUMsa0JBQ3JDO1FBQUEsaUJBQUk7UUFDUixpQkFBTTtRQUNWLGlCQUFNO1FBQ1YsaUJBQU07UUFFTiw4QkFBdUI7UUFDbkIsNkJBQXFCO1FBQUEsYUFBVztRQUFBLGlCQUFJO1FBQ3hDLGlCQUFNO1FBQ04sa0VBT007UUFDVixpQkFBTTs7UUF2QnVDLGVBQWdCO1FBQWhCLGtDQUFnQjtRQUd6QyxlQUFVO1FBQVYsZ0NBQVU7UUFVRCxlQUFXO1FBQVgsaUNBQVc7UUFFOUIsZUFBc0I7UUFBdEIsMkNBQXNCOzt1RkRGbkIsZUFBZTtjQU4zQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QjtpQkFDbkM7YUFDRjt3RkFFVSxNQUFNO2tCQUFkLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNJLE9BQU87a0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGludGVydmFsLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9pbnRlcnZhbCc7XG5pbXBvcnQgeyBOb3RpZnlTZXJ2aWNlIH0gZnJvbSAnLi9ub3RpZnkuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbm90aWZ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGlmeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25vdGlmeS5jb21wb25lbnQuY3NzJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGUgPSAnJztcbiAgQElucHV0KCkgcHJvZ3Jlc3NyZXF1aXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBwcm9ncmVzc1RpbWUgPSAwO1xuICBASW5wdXQoKSBhY3R1YWxUaW1lID0gMDtcbiAgQE91dHB1dCgpIGRlc3Ryb3k6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBteVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBteVZhcjtcbiAgc2V0V2lkdGggPSAwO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIE5vdGlmeVNlcnZpY2U6IE5vdGlmeVNlcnZpY2UsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByb2dyZXNzcmVxdWlyZWQpe1xuICAgIHRoaXMubXlWYXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgfSwgdGhpcy5wcm9ncmVzc1RpbWUgKyA1MDApO1xuICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMucHJvZ3Jlc3NyZXF1aXJlZCkge1xuICAgICAgdGhpcy5zZXRXaWR0aE1ldGhvZCgpO1xuICAgICAgdGhpcy5teVN1YnNjcmlwdGlvbiA9IGludGVydmFsKDEwMCkuc3Vic2NyaWJlKCh4ID0+IHtcbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcygpO1xuICAgICAgfSkpO1xuICAgIH1cblxuICB9XG4gIFxuXG4gIG9uQ2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJvZ3Jlc3NyZXF1aXJlZCkge1xuICAgIHRoaXMubXlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5teVZhcik7XG4gICAgfVxuICAgIHRoaXMuZGVzdHJveS5lbWl0KCk7XG4gIH1cblxuICBzZXRQcm9ncmVzcygpIHtcbiAgICBpZiAodGhpcy5hY3R1YWxUaW1lID4gMCkge1xuICAgICAgdGhpcy5hY3R1YWxUaW1lID0gdGhpcy5hY3R1YWxUaW1lIC0gKCh0aGlzLnByb2dyZXNzVGltZSkvMTAwKTtcbiAgICAgIHRoaXMuc2V0V2lkdGhNZXRob2QoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLm15U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0V2lkdGhNZXRob2QoKVxuICB7XG4gICAgdGhpcy5zZXRXaWR0aCA9ICgodGhpcy5hY3R1YWxUaW1lIC8gdGhpcy5wcm9ncmVzc1RpbWUpICogMTAwKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmQgY29udGFpbmVyICBteS00IHN0YWNrLXRvcFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBjb250YWluZXItZmx1aWRcIiBbbmdDbGFzc109XCJ0eXBlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTBcIj5cbiAgICAgICAgICAgICAgICA8aDM+e3toZWFkZXJ9fTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxuICAgICAgICAgICAgICAgIDxhIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25DbG9zZSgpXCI+WFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj57e21lc3NhZ2V9fTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwicHJvZ3Jlc3NyZXF1aXJlZFwiIGNsYXNzPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgPGRpdiAjcHJvZ3Jlc3NEaXYgW3N0eWxlLndpZHRoLiVdPVwic2V0V2lkdGhcIiBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAnYmctd2FybmluZyc6IHR5cGUgPT09ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICdiZy1kYW5nZXInOiB0eXBlID09PSAnZXJyb3InXG4gICAgICAgICAgfVwiIGNsYXNzPVwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIGFjdGl2ZVwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19