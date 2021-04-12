import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {Store} from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from './auth-store/auth.reducer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    // constructor(private authService: UserService) {}

    constructor(private store: Store<fromApp.Appstate>){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // const authToken = this.authService.getToken();
        // const authRequest = req.clone({
        //     headers: req.headers.set('authorization', 'Bearer ' + authToken)
        // });
        return this.store.select('auth')
        .take(1)
        .switchMap((authState: fromAuth.State) => {

            const authRequest = req.clone({
                headers: req.headers.set('authorization', 'Bearer ' + authState.token)
            });
            return next.handle(authRequest);
        });
        // return next.handle(authRequest);
    }
}