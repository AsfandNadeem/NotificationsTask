import { ComponentRef } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { ElementAttachmentService } from './elementAttachment.service';
import * as i0 from "@angular/core";
export declare class NotifyService {
    private elementService;
    private appRef;
    maxLimit: number;
    Queue: any[];
    private NotifyContainerElement;
    private NotifyContainerRef;
    constructor(elementService: ElementAttachmentService, appRef: ApplicationRef);
    private appendComponentToContainer;
    open(header: any, message: any, category: any): void;
    destroy(childComponentRef: ComponentRef<any>, type: string): void;
    static ɵfac: i0.ɵɵFactoryDef<NotifyService, never>;
    static ɵprov: i0.ɵɵInjectableDef<NotifyService>;
}
//# sourceMappingURL=notify.service.d.ts.map