import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./notify.service";
export class NotifyComponent {
    // @HostBinding('class.redbackground') warning: boolean;
    constructor(NotifyService) {
        this.NotifyService = NotifyService;
        this.type = '';
        this.destroy = new EventEmitter();
    }
    ngOnInit() {
    }
    // isWarning(): boolean {
    //   if (this.type === 'warning') {
    //     return true;
    //   }
    //   else {
    //     return false;
    //   }
    // }
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
NotifyComponent.ɵfac = function NotifyComponent_Factory(t) { return new (t || NotifyComponent)(i0.ɵɵdirectiveInject(i1.NotifyService)); };
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
    } }, styles: [".stack-top[_ngcontent-%COMP%]{text-align:center;padding:0;width:50%;box-shadow:0 10px 19px 10px rgba(0,0,0,.04);color:#000;transition:.2s cubic-bezier(.75,0,.75,.9);top:\"0\";right:\"50%\";transform:translateY(-212%);z-index:1}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotifyComponent, [{
        type: Component,
        args: [{
                selector: 'lib-notify',
                templateUrl: './notify.component.html',
                styleUrls: ['./notify.component.css'
                ]
            }]
    }], function () { return [{ type: i1.NotifyService }]; }, { header: [{
            type: Input
        }], message: [{
            type: Input
        }], type: [{
            type: Input
        }], destroy: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25vdGlmeS9zcmMvbGliL25vdGlmeS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZnkvc3JjL2xpYi9ub3RpZnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFlLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBU2xELE1BQU0sT0FBTyxlQUFlO0lBTzFCLHdEQUF3RDtJQUN4RCxZQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUx2QyxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1QsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTTFELENBQUM7SUFFRCxRQUFRO0lBRVIsQ0FBQztJQUVELHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLE1BQU07SUFDTixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLE1BQU07SUFFTixJQUFJO0lBRUosYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxRQUFRLENBQUM7U0FDakI7YUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFBO1NBQ2I7YUFDSTtZQUNILE9BQU8sTUFBTSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OEVBeENVLGVBQWU7b0RBQWYsZUFBZTtRQ1o1Qiw4QkFBNEM7UUFDeEMsOEJBQW1GO1FBQy9FLDhCQUFpQjtRQUNiLDhCQUFpQjtRQUNiLDBCQUFJO1FBQUEsWUFBVTtRQUFBLGlCQUFLO1FBQ3ZCLGlCQUFNO1FBQ04sOEJBQWlCO1FBQ2IsNEJBQXNDO1FBQXJCLHVGQUFTLGFBQVMsSUFBQztRQUFFLGtCQUN0QztRQUFBLGlCQUFJO1FBQ1IsaUJBQU07UUFDVixpQkFBTTtRQUNWLGlCQUFNO1FBRU4sOEJBQXVCO1FBQ25CLDZCQUFxQjtRQUFBLGFBQVc7UUFBQSxpQkFBSTtRQUN4QyxpQkFBTTtRQUNWLGlCQUFNOztRQWZ1QyxlQUF5QztRQUF6Qyx1REFBeUM7UUFHbEUsZUFBVTtRQUFWLGdDQUFVO1FBVUQsZUFBVztRQUFYLGlDQUFXOzt1RkRGM0IsZUFBZTtjQU4zQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QjtpQkFDbkM7YUFDRjtnRUFFVSxNQUFNO2tCQUFkLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDSSxPQUFPO2tCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdGlmeVNlcnZpY2UgfSBmcm9tICcuL25vdGlmeS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5vdGlmeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3RpZnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ub3RpZnkuY29tcG9uZW50LmNzcydcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlID0gJyc7XG4gIEBPdXRwdXQoKSBkZXN0cm95OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBub3RpZnJlZjogTm90aWZ5Q29tcG9uZW50O1xuICAvLyBASG9zdEJpbmRpbmcoJ2NsYXNzLnJlZGJhY2tncm91bmQnKSB3YXJuaW5nOiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIE5vdGlmeVNlcnZpY2U6IE5vdGlmeVNlcnZpY2UpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgfVxuXG4gIC8vIGlzV2FybmluZygpOiBib29sZWFuIHtcbiAgLy8gICBpZiAodGhpcy50eXBlID09PSAnd2FybmluZycpIHtcbiAgLy8gICAgIHJldHVybiB0cnVlO1xuICAvLyAgIH1cbiAgLy8gICBlbHNlIHtcbiAgLy8gICAgIHJldHVybiBmYWxzZTtcbiAgLy8gICB9XG5cbiAgLy8gfVxuXG4gIGdldEJhY2tncm91bmQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnd2FybmluZycpIHtcbiAgICAgIHJldHVybiAnb3JhbmdlJztcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy50eXBlID09ICdlcnJvcicpIHtcbiAgICAgIHJldHVybiAncmVkJ1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAnYmx1ZSc7XG4gICAgfVxuICB9XG5cbiAgb25DbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kuZW1pdCgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZCBjb250YWluZXIgIG15LTQgc3RhY2stdG9wXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGNvbnRhaW5lci1mbHVpZFwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiZ2V0QmFja2dyb3VuZCgpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aDM+e3toZWFkZXJ9fTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8YSB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uQ2xvc2UoKVwiID5YXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPnt7bWVzc2FnZX19PC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+Il19