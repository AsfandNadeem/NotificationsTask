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
NotifyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NotifyComponent, selectors: [["lib-notify"]], inputs: { header: "header", message: "message", type: "type" }, outputs: { destroy: "destroy" }, decls: 12, vars: 4, consts: [[1, "card", "container", "my-4", "stack-top"], [1, "card-header", "container-fluid"], [1, "row"], [1, "col"], ["type", "button", 3, "click"], [1, "card-body"], [1, "card-text"]], template: function NotifyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "h3");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 3);
        i0.ɵɵelementStart(7, "a", 4);
        i0.ɵɵlistener("click", function NotifyComponent_Template_a_click_7_listener() { return ctx.onClose(); });
        i0.ɵɵtext(8, "X ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 5);
        i0.ɵɵelementStart(10, "p", 6);
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
    } }, styles: [".stack-top[_ngcontent-%COMP%]{text-align:center;padding:0;width:50%;box-shadow:0 10px 19px 10px rgba(0,0,0,.04);color:#000;top:\"0\";right:\"50%\";display:flex;transform:translate(1%,calc(100% - 950px));z-index:1}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25vdGlmeS9zcmMvbGliL25vdGlmeS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFlLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBUWxELE1BQU0sT0FBTyxlQUFlO0lBTTFCLHdEQUF3RDtJQUN4RCxZQUFvQixhQUE0QixFQUFRLFFBQW1CO1FBQXZELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVEsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUpsRSxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1QsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBSzFELENBQUM7SUFFRCxRQUFRO0lBRVIsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLE9BQU8sUUFBUSxDQUFDO1NBQ2pCO2FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQTtTQUNiO2FBQ0k7WUFDSCxPQUFPLE1BQU0sQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7OzhFQTdCVSxlQUFlO29EQUFmLGVBQWU7UUNaNUIsOEJBQTRDO1FBQ3hDLDhCQUFtRjtRQUMvRSw4QkFBaUI7UUFDYiw4QkFBaUI7UUFDYiwwQkFBSTtRQUFBLFlBQVU7UUFBQSxpQkFBSztRQUN2QixpQkFBTTtRQUNOLDhCQUFpQjtRQUNiLDRCQUFxQztRQUFwQix1RkFBUyxhQUFTLElBQUM7UUFBQyxrQkFDckM7UUFBQSxpQkFBSTtRQUNSLGlCQUFNO1FBQ1YsaUJBQU07UUFDVixpQkFBTTtRQUVOLDhCQUF1QjtRQUNuQiw2QkFBcUI7UUFBQSxhQUFXO1FBQUEsaUJBQUk7UUFDeEMsaUJBQU07UUFDVixpQkFBTTs7UUFmdUMsZUFBeUM7UUFBekMsdURBQXlDO1FBR2xFLGVBQVU7UUFBVixnQ0FBVTtRQVVELGVBQVc7UUFBWCxpQ0FBVzs7dUZERjNCLGVBQWU7Y0FOM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0I7aUJBQ25DO2FBQ0Y7d0ZBRVUsTUFBTTtrQkFBZCxLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0ksT0FBTztrQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdGlmeVNlcnZpY2UgfSBmcm9tICcuL25vdGlmeS5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1ub3RpZnknLFxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWZ5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbm90aWZ5LmNvbXBvbmVudC5jc3MnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTm90aWZ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZSA9ICcnO1xuICBAT3V0cHV0KCkgZGVzdHJveTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIFxuICAvLyBASG9zdEJpbmRpbmcoJ2NsYXNzLnJlZGJhY2tncm91bmQnKSB3YXJuaW5nOiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIE5vdGlmeVNlcnZpY2U6IE5vdGlmeVNlcnZpY2UscHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgfVxuXG4gIGdldEJhY2tncm91bmQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnd2FybmluZycpIHtcbiAgICAgIHJldHVybiAnb3JhbmdlJztcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy50eXBlID09ICdlcnJvcicpIHtcbiAgICAgIHJldHVybiAncmVkJ1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAnYmx1ZSc7XG4gICAgfVxuICB9XG5cbiAgb25DbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kuZW1pdCgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZCBjb250YWluZXIgIG15LTQgc3RhY2stdG9wXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGNvbnRhaW5lci1mbHVpZFwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiZ2V0QmFja2dyb3VuZCgpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aDM+e3toZWFkZXJ9fTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8YSB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uQ2xvc2UoKVwiPlhcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+e3ttZXNzYWdlfX08L3A+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=