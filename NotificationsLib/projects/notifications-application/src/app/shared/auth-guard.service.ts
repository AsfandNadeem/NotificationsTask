
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {Store} from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from './auth-store/auth.reducer';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {
  // constructor(private authService: UserService, private router: Router) {}
 constructor(private router: Router,private store: Store<fromApp.Appstate>){}
  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // const isAuth = this.authService.getIsAuth();
    // if (!isAuth) {
    //   this.router.navigate(['/login']);
    // }
    // return true;
    return this.store.select('auth').pipe(
      map((authState: fromAuth.State) => {
        if (!authState.authenticated && authState.token == null) {
            this.router.navigate(['/login']);
          };
      return authState.authenticated;
    }));
  }
}