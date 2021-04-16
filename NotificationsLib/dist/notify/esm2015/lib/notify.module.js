import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotifyComponent } from './notify.component';
import { NotifyContainerComponent } from './notify-container/notify-container.component';
import { LibConfigService } from './libconfig';
import * as i0 from "@angular/core";
export class NotifyModule {
    static forRoot(config) {
        return {
            ngModule: NotifyModule,
            providers: [
                {
                    provide: LibConfigService,
                    useValue: config
                }
            ]
        };
    }
}
NotifyModule.ɵfac = function NotifyModule_Factory(t) { return new (t || NotifyModule)(); };
NotifyModule.ɵmod = i0.ɵɵdefineNgModule({ type: NotifyModule });
NotifyModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NotifyModule, { declarations: [NotifyComponent, NotifyContainerComponent], imports: [CommonModule], exports: [NotifyComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotifyModule, [{
        type: NgModule,
        args: [{
                declarations: [NotifyComponent, NotifyContainerComponent],
                imports: [CommonModule
                ],
                exports: [NotifyComponent]
                // providers: [ { provide: APP_CONFIG, useValue: AppConfig }]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25vdGlmeS9zcmMvbGliL25vdGlmeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBVzFELE1BQU0sT0FBTyxZQUFZO0lBQ2QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFpQjtRQUVyQyxPQUFPO1lBQ0gsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNQO29CQUNJLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFFBQVEsRUFBRSxNQUFNO2lCQUNuQjthQUNKO1NBQ0osQ0FBQztJQUNOLENBQUM7O3dFQVpVLFlBQVk7Z0RBQVosWUFBWTtvREFMZCxDQUFDLFlBQVk7U0FDckI7d0ZBSVUsWUFBWSxtQkFOUixlQUFlLEVBQUUsd0JBQXdCLGFBQzlDLFlBQVksYUFFWixlQUFlO3VGQUdkLFlBQVk7Y0FQeEIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSx3QkFBd0IsQ0FBQztnQkFDekQsT0FBTyxFQUFFLENBQUMsWUFBWTtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUMxQiw2REFBNkQ7YUFDOUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdGlmeUNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3RpZnlDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL25vdGlmeS1jb250YWluZXIvbm90aWZ5LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgbGliY29uZmlnLCBMaWJDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9saWJjb25maWcnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTm90aWZ5Q29tcG9uZW50LCBOb3RpZnlDb250YWluZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtOb3RpZnlDb21wb25lbnRdXG4gIC8vIHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IEFQUF9DT05GSUcsIHVzZVZhbHVlOiBBcHBDb25maWcgfV1cbn0pXG5leHBvcnQgY2xhc3MgTm90aWZ5TW9kdWxlIHsgXG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZzogbGliY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOb3RpZnlNb2R1bGU+IHtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuZ01vZHVsZTogTm90aWZ5TW9kdWxlLFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwcm92aWRlOiBMaWJDb25maWdTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgfTtcbiAgfVxufVxuXG4iXX0=