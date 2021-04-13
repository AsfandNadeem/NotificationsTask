// import { Injectable } from "@angular/core";
// import { Actions, createEffect, Effect } from "@ngrx/effects";
// import {ofType} from '@ngrx/effects';
// import { map, switchMap } from "rxjs/operators";
// import * as AuthActions from './auth-actions';

// @Injectable()
// export class AuthEffects {
//     // @Effect()
//     // authSignup = this.actions$
//     // .pipe(ofType(AuthActions.TRY_SIGNUP),
//     // switchMap((action: AuthActions.TrySignup) => {
//     //     return action.payload;
//     // })
//     // );
//     authSignup = createEffect(() => {
//     this.actions$.pipe(
//          ofType(AuthActions.TRY_SIGNUP),
//         map((action: AuthActions.TrySignup) =>
//         return action.payload;
//         st was successfull (`[Customers Api] Load Sucess`)
//             switchMap(() =>
//                return action.payload;
//             ),
//             // // return a Failed action when something went wrong during the HTTP request (`[Customers Api] Load Failed`)
//             // catchError((error) =>
//             //   of(CustomerApiActions.loadCustomersFailed(error)),
//             // ),
//           ),
//         // ),
//       )
//           });

//     constructor(private actions$: Actions){

//     }

// }