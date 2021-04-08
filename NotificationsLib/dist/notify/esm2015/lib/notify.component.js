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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25vdGlmeS9zcmMvbGliL25vdGlmeS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEwQyxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFekYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyw4QkFBOEIsQ0FBQzs7Ozs7SUNVbEMsOEJBQStDO0lBQzNDLDhCQUVNO0lBQ1YsaUJBQU07OztJQUhnQixlQUEwQjtJQUExQiw2Q0FBMEI7O0FESHBELE1BQU0sT0FBTyxlQUFlO0lBWTFCLHdEQUF3RDtJQUN4RCxZQUFvQixhQUE0QixFQUFTLFFBQW1CO1FBQXhELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVZuRSxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZCxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUQsb0RBQW9EO1FBQ3BELGFBQVEsR0FBRyxDQUFDLENBQUM7SUFLYixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ0w7SUFFSCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxZQUFZLENBQUM7U0FDckI7YUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFBO1NBQ2I7YUFDSTtZQUNILE9BQU8sTUFBTSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFFOUQsc0dBQXNHO1NBQ3ZHO2FBQ0k7WUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7OEVBeERVLGVBQWU7b0RBQWYsZUFBZTtRQ2Q1Qiw4QkFBNEM7UUFDeEMsOEJBQW1GO1FBQy9FLDhCQUFpQjtRQUNiLDhCQUFvQjtRQUNoQiwwQkFBSTtRQUFBLFlBQVU7UUFBQSxpQkFBSztRQUN2QixpQkFBTTtRQUNOLDhCQUFtQjtRQUNmLDRCQUFxQztRQUFwQix1RkFBUyxhQUFTLElBQUM7UUFBQyxrQkFDckM7UUFBQSxpQkFBSTtRQUNSLGlCQUFNO1FBQ1YsaUJBQU07UUFDVixpQkFBTTtRQUVOLDhCQUFtRDtRQUMvQyw2QkFBcUI7UUFBQSxhQUFXO1FBQUEsaUJBQUk7UUFDeEMsaUJBQU07UUFDTixrRUFJTTtRQUNWLGlCQUFNOztRQXBCdUMsZUFBeUM7UUFBekMsdURBQXlDO1FBR2xFLGVBQVU7UUFBVixnQ0FBVTtRQVVELGVBQVc7UUFBWCxpQ0FBVztRQUU5QixlQUFzQjtRQUF0QiwyQ0FBc0I7O3VGREZuQixlQUFlO2NBTjNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCO2lCQUNuQzthQUNGO3dGQUVVLE1BQU07a0JBQWQsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0ksT0FBTztrQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaW50ZXJ2YWwsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2ludGVydmFsJztcbmltcG9ydCB7IE5vdGlmeVNlcnZpY2UgfSBmcm9tICcuL25vdGlmeS5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1ub3RpZnknLFxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWZ5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbm90aWZ5LmNvbXBvbmVudC5jc3MnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTm90aWZ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZSA9ICcnO1xuICBASW5wdXQoKSBwcm9ncmVzc3JlcXVpcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHByb2dyZXNzVGltZSA9IDA7XG4gIEBJbnB1dCgpIGFjdHVhbFRpbWUgPSAwO1xuICBAT3V0cHV0KCkgZGVzdHJveTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIG15U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIC8vIEBWaWV3Q2hpbGQoJ3Byb2dyZXNzRGl2JykgZGl2Q3VydGFpbjogRWxlbWVudFJlZjtcbiAgc2V0V2lkdGggPSAwO1xuXG4gIC8vIEBIb3N0QmluZGluZygnY2xhc3MucmVkYmFja2dyb3VuZCcpIHdhcm5pbmc6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgTm90aWZ5U2VydmljZTogTm90aWZ5U2VydmljZSwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMucHJvZ3Jlc3NyZXF1aXJlZCkge1xuICAgICAgdGhpcy5zZXRXaWR0aCA9ICgodGhpcy5hY3R1YWxUaW1lIC8gdGhpcy5wcm9ncmVzc1RpbWUpICogMTAwKTtcbiAgICAgIHRoaXMubXlTdWJzY3JpcHRpb24gPSBpbnRlcnZhbCgxMDApLnN1YnNjcmliZSgoeCA9PiB7XG4gICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3MoKTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgfVxuXG4gIGdldEJhY2tncm91bmQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnd2FybmluZycpIHtcbiAgICAgIHJldHVybiAnZGFya29yYW5nZSc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSAnZXJyb3InKSB7XG4gICAgICByZXR1cm4gJ3JlZCdcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gJ2JsdWUnO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95LmVtaXQoKTtcbiAgfVxuXG4gIHNldFByb2dyZXNzKCkge1xuICAgIGlmICh0aGlzLmFjdHVhbFRpbWUgPiAwKSB7XG4gICAgICB0aGlzLmFjdHVhbFRpbWUgPSB0aGlzLmFjdHVhbFRpbWUgLSAxMDA7XG4gICAgICB0aGlzLnNldFdpZHRoID0gKCh0aGlzLmFjdHVhbFRpbWUgLyB0aGlzLnByb2dyZXNzVGltZSkgKiAxMDApO1xuICAgICAgXG4gICAgICAvLyB0aGlzLmRpdkN1cnRhaW4ubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9ICh0aGlzLmFjdHVhbFRpbWUgLyB0aGlzLnByb2dyZXNzVGltZSkudG9TdHJpbmcoKSArICclJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLm15U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZCBjb250YWluZXIgIG15LTQgc3RhY2stdG9wXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGNvbnRhaW5lci1mbHVpZFwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiZ2V0QmFja2dyb3VuZCgpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTBcIj5cbiAgICAgICAgICAgICAgICA8aDM+e3toZWFkZXJ9fTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxuICAgICAgICAgICAgICAgIDxhIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25DbG9zZSgpXCI+WFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj57e21lc3NhZ2V9fTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwicHJvZ3Jlc3NyZXF1aXJlZFwiIGNsYXNzPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgPGRpdiAjcHJvZ3Jlc3NEaXYgW3N0eWxlLndpZHRoLiVdPVwic2V0V2lkdGhcIiBjbGFzcz1cInByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3RyaXBlZCBhY3RpdmVcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==