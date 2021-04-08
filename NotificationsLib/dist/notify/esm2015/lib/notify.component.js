import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import 'rxjs/add/observable/interval';
import * as i0 from "@angular/core";
import * as i1 from "./notify.service";
import * as i2 from "@angular/common";
function NotifyComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "div", 10, 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("width", ctx_r0.setWidth, "%");
} }
export class NotifyComponent {
    // @HostBinding('class.redbackground') warning: boolean;
    constructor(NotifyService, renderer) {
        this.NotifyService = NotifyService;
        this.renderer = renderer;
        this.type = '';
        this.progressrequired = false;
        this.progressTime = 0;
        this.actualTime = 0;
        this.destroy = new EventEmitter();
        // @ViewChild('progressDiv') divCurtain: ElementRef;
        this.setWidth = 0;
        this.exists = true;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        if (this.progressrequired) {
            this.setWidth = ((this.actualTime / this.progressTime) * 100);
            this.mySubscription = interval(100).subscribe((x => {
                this.setProgress();
            }));
        }
    }
    getBackground() {
        if (this.type === 'warning') {
            return 'darkorange';
        }
        else if (this.type == 'error') {
            return 'red';
        }
        else {
            return 'blue';
        }
    }
    onClose() {
        if (this.progressrequired) {
            this.mySubscription.unsubscribe();
        }
        this.destroy.emit();
    }
    setProgress() {
        if (this.actualTime > 0) {
            this.actualTime = this.actualTime - 100;
            this.setWidth = ((this.actualTime / this.progressTime) * 100);
            // this.divCurtain.nativeElement.style.width = (this.actualTime / this.progressTime).toString() + '%';
        }
        else {
            this.mySubscription.unsubscribe();
        }
    }
}
NotifyComponent.ɵfac = function NotifyComponent_Factory(t) { return new (t || NotifyComponent)(i0.ɵɵdirectiveInject(i1.NotifyService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
NotifyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NotifyComponent, selectors: [["lib-notify"]], inputs: { header: "header", message: "message", type: "type", progressrequired: "progressrequired", progressTime: "progressTime", actualTime: "actualTime" }, outputs: { destroy: "destroy" }, decls: 13, vars: 5, consts: [[1, "card", "container", "my-4", "stack-top"], [1, "card-header", "container-fluid"], [1, "row"], [1, "col-10"], [1, "col-2"], ["type", "button", 3, "click"], [1, "card-body", 2, "text-align", "center"], [1, "card-text"], ["class", "progress", 4, "ngIf"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "active"], ["progressDiv", ""]], template: function NotifyComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(12, NotifyComponent_div_12_Template, 3, 2, "div", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("background-color", ctx.getBackground());
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.header);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(ctx.message);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.progressrequired);
    } }, directives: [i2.NgIf], styles: [".stack-top[_ngcontent-%COMP%]{padding:0;width:20%;box-shadow:0 10px 19px 10px rgba(0,0,0,.04);color:#000;display:flex;transform:translateY(calc(100% - 900px));z-index:1;margin-right:1%}@media (max-width:1480px){.stack-top[_ngcontent-%COMP%]{transform:translateY(calc(100% - 600px))}}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25vdGlmeS9zcmMvbGliL25vdGlmeS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEwQyxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFekYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyw4QkFBOEIsQ0FBQzs7Ozs7SUNVbEMsOEJBQStDO0lBQzNDLDhCQUVNO0lBQ1YsaUJBQU07OztJQUhnQixlQUEwQjtJQUExQiw2Q0FBMEI7O0FESHBELE1BQU0sT0FBTyxlQUFlO0lBYTFCLHdEQUF3RDtJQUN4RCxZQUFvQixhQUE0QixFQUFTLFFBQW1CO1FBQXhELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVhuRSxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZCxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUQsb0RBQW9EO1FBQ3BELGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixXQUFNLEdBQUcsSUFBSSxDQUFDO0lBS2QsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNMO0lBRUgsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO2FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQTtTQUNiO2FBQ0k7WUFDSCxPQUFPLE1BQU0sQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUU5RCxzR0FBc0c7U0FDdkc7YUFDSTtZQUNILElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs4RUE1RFUsZUFBZTtvREFBZixlQUFlO1FDZDVCLDhCQUE0QztRQUN4Qyw4QkFBbUY7UUFDL0UsOEJBQWlCO1FBQ2IsOEJBQW9CO1FBQ2hCLDBCQUFJO1FBQUEsWUFBVTtRQUFBLGlCQUFLO1FBQ3ZCLGlCQUFNO1FBQ04sOEJBQW1CO1FBQ2YsNEJBQXFDO1FBQXBCLHVGQUFTLGFBQVMsSUFBQztRQUFDLGtCQUNyQztRQUFBLGlCQUFJO1FBQ1IsaUJBQU07UUFDVixpQkFBTTtRQUNWLGlCQUFNO1FBRU4sOEJBQW1EO1FBQy9DLDZCQUFxQjtRQUFBLGFBQVc7UUFBQSxpQkFBSTtRQUN4QyxpQkFBTTtRQUNOLGtFQUlNO1FBQ1YsaUJBQU07O1FBcEJ1QyxlQUF5QztRQUF6Qyx1REFBeUM7UUFHbEUsZUFBVTtRQUFWLGdDQUFVO1FBVUQsZUFBVztRQUFYLGlDQUFXO1FBRTlCLGVBQXNCO1FBQXRCLDJDQUFzQjs7dUZERm5CLGVBQWU7Y0FOM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0I7aUJBQ25DO2FBQ0Y7d0ZBRVUsTUFBTTtrQkFBZCxLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDSSxPQUFPO2tCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpbnRlcnZhbCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvaW50ZXJ2YWwnO1xuaW1wb3J0IHsgTm90aWZ5U2VydmljZSB9IGZyb20gJy4vbm90aWZ5LnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5vdGlmeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3RpZnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ub3RpZnkuY29tcG9uZW50LmNzcydcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlID0gJyc7XG4gIEBJbnB1dCgpIHByb2dyZXNzcmVxdWlyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgcHJvZ3Jlc3NUaW1lID0gMDtcbiAgQElucHV0KCkgYWN0dWFsVGltZSA9IDA7XG4gIEBPdXRwdXQoKSBkZXN0cm95OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgbXlTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgLy8gQFZpZXdDaGlsZCgncHJvZ3Jlc3NEaXYnKSBkaXZDdXJ0YWluOiBFbGVtZW50UmVmO1xuICBzZXRXaWR0aCA9IDA7XG4gIGV4aXN0cyA9IHRydWU7XG5cbiAgLy8gQEhvc3RCaW5kaW5nKCdjbGFzcy5yZWRiYWNrZ3JvdW5kJykgd2FybmluZzogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBOb3RpZnlTZXJ2aWNlOiBOb3RpZnlTZXJ2aWNlLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5wcm9ncmVzc3JlcXVpcmVkKSB7XG4gICAgICB0aGlzLnNldFdpZHRoID0gKCh0aGlzLmFjdHVhbFRpbWUgLyB0aGlzLnByb2dyZXNzVGltZSkgKiAxMDApO1xuICAgICAgdGhpcy5teVN1YnNjcmlwdGlvbiA9IGludGVydmFsKDEwMCkuc3Vic2NyaWJlKCh4ID0+IHtcbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcygpO1xuICAgICAgfSkpO1xuICAgIH1cblxuICB9XG5cbiAgZ2V0QmFja2dyb3VuZCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICd3YXJuaW5nJykge1xuICAgICAgcmV0dXJuICdkYXJrb3JhbmdlJztcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy50eXBlID09ICdlcnJvcicpIHtcbiAgICAgIHJldHVybiAncmVkJ1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAnYmx1ZSc7XG4gICAgfVxuICB9XG5cbiAgb25DbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcm9ncmVzc3JlcXVpcmVkKSB7XG4gICAgdGhpcy5teVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLmRlc3Ryb3kuZW1pdCgpO1xuICB9XG5cbiAgc2V0UHJvZ3Jlc3MoKSB7XG4gICAgaWYgKHRoaXMuYWN0dWFsVGltZSA+IDApIHtcbiAgICAgIHRoaXMuYWN0dWFsVGltZSA9IHRoaXMuYWN0dWFsVGltZSAtIDEwMDtcbiAgICAgIHRoaXMuc2V0V2lkdGggPSAoKHRoaXMuYWN0dWFsVGltZSAvIHRoaXMucHJvZ3Jlc3NUaW1lKSAqIDEwMCk7XG4gICAgICBcbiAgICAgIC8vIHRoaXMuZGl2Q3VydGFpbi5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gKHRoaXMuYWN0dWFsVGltZSAvIHRoaXMucHJvZ3Jlc3NUaW1lKS50b1N0cmluZygpICsgJyUnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMubXlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYXJkIGNvbnRhaW5lciAgbXktNCBzdGFjay10b3BcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgY29udGFpbmVyLWZsdWlkXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJnZXRCYWNrZ3JvdW5kKClcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMFwiPlxuICAgICAgICAgICAgICAgIDxoMz57e2hlYWRlcn19PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XG4gICAgICAgICAgICAgICAgPGEgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbkNsb3NlKClcIj5YXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPlxuICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPnt7bWVzc2FnZX19PC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgKm5nSWY9XCJwcm9ncmVzc3JlcXVpcmVkXCIgY2xhc3M9XCJwcm9ncmVzc1wiPlxuICAgICAgICA8ZGl2ICNwcm9ncmVzc0RpdiBbc3R5bGUud2lkdGguJV09XCJzZXRXaWR0aFwiIGNsYXNzPVwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIGFjdGl2ZVwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19