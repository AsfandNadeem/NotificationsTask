import { InjectionToken } from "@angular/core";

export interface libconfig {
    timeOut: number;
    timeOutRequiredCategories: Array<string>;
    maxLimit: number;
}

export const LibConfigService = new InjectionToken<libconfig>('libconfig');


