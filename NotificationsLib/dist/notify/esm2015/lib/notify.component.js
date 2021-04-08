import { Input, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import 'rxjs/add/observable/interval';
import * as i0 from "@angular/core";
import * as i1 from "./notify.service";
import * as i2 from "@angular/common";
const _c0 = ["progressDiv"];
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
        this.setWidth = 0;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        if (this.progressrequired) {
            this.setWidth = ((this.actualTime / this.progressTime) * 100);
            this.mySubscription = interval(100).subscribe((x => {
                this.getProgress();
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
        this.destroy.emit();
    }
    getProgress() {
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
NotifyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NotifyComponent, selectors: [["lib-notify"]], viewQuery: function NotifyComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.divCurtain = _t.first);
    } }, inputs: { header: "header", message: "message", type: "type", progressrequired: "progressrequired", progressTime: "progressTime", actualTime: "actualTime" }, outputs: { destroy: "destroy" }, decls: 13, vars: 5, consts: [[1, "card", "container", "my-4", "stack-top"], [1, "card-header", "container-fluid"], [1, "row"], [1, "col-10"], [1, "col-2"], ["type", "button", 3, "click"], [1, "card-body", 2, "text-align", "center"], [1, "card-text"], ["class", "progress", 4, "ngIf"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "active"], ["progressDiv", ""]], template: function NotifyComponent_Template(rf, ctx) { if (rf & 1) {
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
        }], divCurtain: [{
            type: ViewChild,
            args: ['progressDiv']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25vdGlmeS9zcmMvbGliL25vdGlmeS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEwQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sOEJBQThCLENBQUM7Ozs7OztJQ1VsQyw4QkFBK0M7SUFDM0MsOEJBRU07SUFDVixpQkFBTTs7O0lBSGdCLGVBQTBCO0lBQTFCLDZDQUEwQjs7QURIcEQsTUFBTSxPQUFPLGVBQWU7SUFZMUIsd0RBQXdEO0lBQ3hELFlBQW9CLGFBQTRCLEVBQVMsUUFBbUI7UUFBeEQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBVm5FLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNkLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUcxRCxhQUFRLEdBQUcsQ0FBQyxDQUFDO0lBS2IsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNMO0lBRUgsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO2FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQTtTQUNiO2FBQ0k7WUFDSCxPQUFPLE1BQU0sQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBRTlELHNHQUFzRztTQUN2RzthQUNJO1lBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNuQztJQUNILENBQUM7OzhFQXhEVSxlQUFlO29EQUFmLGVBQWU7Ozs7OztRQ2Q1Qiw4QkFBNEM7UUFDeEMsOEJBQW1GO1FBQy9FLDhCQUFpQjtRQUNiLDhCQUFvQjtRQUNoQiwwQkFBSTtRQUFBLFlBQVU7UUFBQSxpQkFBSztRQUN2QixpQkFBTTtRQUNOLDhCQUFtQjtRQUNmLDRCQUFxQztRQUFwQix1RkFBUyxhQUFTLElBQUM7UUFBQyxrQkFDckM7UUFBQSxpQkFBSTtRQUNSLGlCQUFNO1FBQ1YsaUJBQU07UUFDVixpQkFBTTtRQUVOLDhCQUFtRDtRQUMvQyw2QkFBcUI7UUFBQSxhQUFXO1FBQUEsaUJBQUk7UUFDeEMsaUJBQU07UUFDTixrRUFJTTtRQUNWLGlCQUFNOztRQXBCdUMsZUFBeUM7UUFBekMsdURBQXlDO1FBR2xFLGVBQVU7UUFBVixnQ0FBVTtRQVVELGVBQVc7UUFBWCxpQ0FBVztRQUU5QixlQUFzQjtRQUF0QiwyQ0FBc0I7O3VGREZuQixlQUFlO2NBTjNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCO2lCQUNuQzthQUNGO3dGQUVVLE1BQU07a0JBQWQsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0ksT0FBTztrQkFBaEIsTUFBTTtZQUVtQixVQUFVO2tCQUFuQyxTQUFTO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGludGVydmFsLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9pbnRlcnZhbCc7XG5pbXBvcnQgeyBOb3RpZnlTZXJ2aWNlIH0gZnJvbSAnLi9ub3RpZnkuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbm90aWZ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGlmeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25vdGlmeS5jb21wb25lbnQuY3NzJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGUgPSAnJztcbiAgQElucHV0KCkgcHJvZ3Jlc3NyZXF1aXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBwcm9ncmVzc1RpbWUgPSAwO1xuICBASW5wdXQoKSBhY3R1YWxUaW1lID0gMDtcbiAgQE91dHB1dCgpIGRlc3Ryb3k6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBteVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBAVmlld0NoaWxkKCdwcm9ncmVzc0RpdicpIGRpdkN1cnRhaW46IEVsZW1lbnRSZWY7XG4gIHNldFdpZHRoID0gMDtcblxuICAvLyBASG9zdEJpbmRpbmcoJ2NsYXNzLnJlZGJhY2tncm91bmQnKSB3YXJuaW5nOiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIE5vdGlmeVNlcnZpY2U6IE5vdGlmeVNlcnZpY2UsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLnByb2dyZXNzcmVxdWlyZWQpIHtcbiAgICAgIHRoaXMuc2V0V2lkdGggPSAoKHRoaXMuYWN0dWFsVGltZSAvIHRoaXMucHJvZ3Jlc3NUaW1lKSAqIDEwMCk7XG4gICAgICB0aGlzLm15U3Vic2NyaXB0aW9uID0gaW50ZXJ2YWwoMTAwKS5zdWJzY3JpYmUoKHggPT4ge1xuICAgICAgICB0aGlzLmdldFByb2dyZXNzKCk7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gIH1cblxuICBnZXRCYWNrZ3JvdW5kKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3dhcm5pbmcnKSB7XG4gICAgICByZXR1cm4gJ2RhcmtvcmFuZ2UnO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gJ2Vycm9yJykge1xuICAgICAgcmV0dXJuICdyZWQnXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuICdibHVlJztcbiAgICB9XG4gIH1cblxuICBvbkNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveS5lbWl0KCk7XG4gIH1cblxuICBnZXRQcm9ncmVzcygpIHtcbiAgICBpZiAodGhpcy5hY3R1YWxUaW1lID4gMCkge1xuICAgICAgdGhpcy5hY3R1YWxUaW1lID0gdGhpcy5hY3R1YWxUaW1lIC0gMTAwO1xuICAgICAgdGhpcy5zZXRXaWR0aCA9ICgodGhpcy5hY3R1YWxUaW1lIC8gdGhpcy5wcm9ncmVzc1RpbWUpICogMTAwKTtcbiAgICAgIFxuICAgICAgLy8gdGhpcy5kaXZDdXJ0YWluLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSAodGhpcy5hY3R1YWxUaW1lIC8gdGhpcy5wcm9ncmVzc1RpbWUpLnRvU3RyaW5nKCkgKyAnJSc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5teVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmQgY29udGFpbmVyICBteS00IHN0YWNrLXRvcFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBjb250YWluZXItZmx1aWRcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImdldEJhY2tncm91bmQoKVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwXCI+XG4gICAgICAgICAgICAgICAgPGgzPnt7aGVhZGVyfX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICA8YSB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uQ2xvc2UoKVwiPlhcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+XG4gICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+e3ttZXNzYWdlfX08L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cInByb2dyZXNzcmVxdWlyZWRcIiBjbGFzcz1cInByb2dyZXNzXCI+XG4gICAgICAgIDxkaXYgI3Byb2dyZXNzRGl2IFtzdHlsZS53aWR0aC4lXT1cInNldFdpZHRoXCIgY2xhc3M9XCJwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgYWN0aXZlXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=