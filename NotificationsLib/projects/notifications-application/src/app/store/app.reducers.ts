import {ActionReducerMap} from "@ngrx/store";
import * as fromAuth from '../shared/auth-store/auth.reducer';

export interface Appstate{
    auth: fromAuth.State
}

export const reducers: ActionReducerMap<Appstate> = {
    auth: fromAuth.authReducer
};