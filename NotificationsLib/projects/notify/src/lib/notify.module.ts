import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NotifyComponent } from './notify.component';
import { NotifyContainerComponent } from './notify-container/notify-container.component';
import { libconfig, LibConfigService } from './libconfig';



@NgModule({
  declarations: [NotifyComponent, NotifyContainerComponent],
  imports: [CommonModule
  ],
  exports: [NotifyComponent]
  // providers: [ { provide: APP_CONFIG, useValue: AppConfig }]
})
export class NotifyModule { 
    public static forRoot(config: libconfig): ModuleWithProviders<NotifyModule> {

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

