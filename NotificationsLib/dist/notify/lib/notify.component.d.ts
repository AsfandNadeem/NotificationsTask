import { AfterContentInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import 'rxjs/add/observable/interval';
import { NotifyService } from './notify.service';
import * as i0 from "@angular/core";
export declare class NotifyComponent implements OnInit, AfterContentInit {
    private NotifyService;
    header: string;
    message: string;
    type: string;
    progressrequired: boolean;
    progressTime: number;
    actualTime: number;
    destroy: EventEmitter<any>;
    mySubscription: Subscription;
    myVar: any;
    setWidth: number;
    constructor(NotifyService: NotifyService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    onClose(): void;
    setProgress(): void;
    setWidthMethod(): void;
    static ɵfac: i0.ɵɵFactoryDef<NotifyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NotifyComponent, "lib-notify", never, { "header": "header"; "message": "message"; "type": "type"; "progressrequired": "progressrequired"; "progressTime": "progressTime"; "actualTime": "actualTime"; }, { "destroy": "destroy"; }, never, never>;
}
//# sourceMappingURL=notify.component.d.ts.map