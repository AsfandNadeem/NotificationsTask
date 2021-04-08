import { ComponentRef } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { ElementAttachmentService } from './elementAttachment.service';
import { INotification } from './notification.interface';
import * as i0 from "@angular/core";
export declare class NotifyService {
    private elementService;
    private appRef;
    maxLimit: number;
    countNotifications: number;
    Queue: INotification[];
    private _children;
    private NotifyContainerElement;
    private NotifyContainerRef;
    constructor(elementService: ElementAttachmentService, appRef: ApplicationRef);
    private appendComponentToContainer;
    open(header: any, message: any, category: any): void;
    destroy(childComponentRef: ComponentRef<any>): void;
    destroyAll(): void;
    static ɵfac: i0.ɵɵFactoryDef<NotifyService, never>;
    static ɵprov: i0.ɵɵInjectableDef<NotifyService>;
}
//# sourceMappingURL=notify.service.d.ts.map