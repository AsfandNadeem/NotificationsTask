import { AfterViewInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import 'rxjs/add/observable/interval';
import { NotifyService } from './notify.service';
import * as i0 from "@angular/core";
export declare class NotifyComponent implements OnInit, AfterViewInit {
    private NotifyService;
    renderer: Renderer2;
    header: string;
    message: string;
    type: string;
    progressrequired: boolean;
    progressTime: number;
    actualTime: number;
    destroy: EventEmitter<any>;
    mySubscription: Subscription;
    setWidth: number;
    constructor(NotifyService: NotifyService, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    getBackground(): string;
    onClose(): void;
    setProgress(): void;
    static ɵfac: i0.ɵɵFactoryDef<NotifyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NotifyComponent, "lib-notify", never, { "header": "header"; "message": "message"; "type": "type"; "progressrequired": "progressrequired"; "progressTime": "progressTime"; "actualTime": "actualTime"; }, { "destroy": "destroy"; }, never, never>;
}
//# sourceMappingURL=notify.component.d.ts.map