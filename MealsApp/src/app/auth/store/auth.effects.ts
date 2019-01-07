import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import * as AuthActions from './auth.actions';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as firebase from 'firebase';

@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$
    .pipe(ofType(map((action: AuthActions.TrySignup) => {
        return action.payload;
    })
    .switchMap((authData: {username: string, password: string}) => {
        return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
        return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token: string) => {
        return [
            {
                type: AuthActions.SINGUP
            },
            {
                type: AuthActions.SET_TOKEN,
                payload: token
            }
        ];
    })));

    @Effect()
    authSignin = this.actions$
    .pipe(ofType(AuthActions.TRY_SIGNIN))
    .map((action: AuthActions.TrySignup) => {
        return action.payload;
    })
    .switchMap((authData: {username: string, password: string}) => {
        return fromPromise(firebase.auth().signInAndRetrieveDataWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
        return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token: string) => {
        return [
            {
                type: AuthActions.SINGIN
            },
            {
                type: AuthActions.SET_TOKEN,
                payload: token
            }
        ];
    });

    constructor(private actions$: Actions) {

    }

}
