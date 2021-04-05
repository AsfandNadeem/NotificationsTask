import { Renderer2 } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { NotifyService } from './notify.service';
import * as i0 from "@angular/core";
export declare class NotifyComponent implements OnInit {
    private NotifyService;
    renderer: Renderer2;
    header: string;
    message: string;
    type: string;
    destroy: EventEmitter<any>;
    constructor(NotifyService: NotifyService, renderer: Renderer2);
    ngOnInit(): void;
    getBackground(): string;
    onClose(): void;
    static ɵfac: i0.ɵɵFactoryDef<NotifyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NotifyComponent, "lib-notify", never, { "header": "header"; "message": "message"; "type": "type"; }, { "destroy": "destroy"; }, never, never>;
}
//# sourceMappingURL=notify.component.d.ts.map