import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { ofType } from 'redux-observable';
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {from, of} from "rxjs";
import {Observable} from "rxjs";
import {AuthClient} from "../../api";

export const AUTH_FEATURE_KEY = 'auth';

export type AuthError = any;

export interface EntityProps {
    completed: boolean
    id: number
    title: string
    userId: number,
}

export interface AuthState {
    value: number,
    entity: EntityProps,
    error: AuthError;
}

const initialState: AuthState = {
    value: 0,
    entity: {
        completed: false,
        id: 0,
        title: '',
        userId: 0,
    },
    error: null,
}

export const authSlice = createSlice({
    name: AUTH_FEATURE_KEY,
    initialState: initialState as AuthState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        getStart: () => {
            console.log(5505)
        },
        getSuccess: (state, action: PayloadAction<any>) => {
            state.entity = action.payload;
            console.log(action.payload, 'action.payload.response')
        },
        getError: (state, action: PayloadAction<AuthError>) => {
            state.error = action.payload;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
});

export const authReducer = authSlice.reducer;

// Action creators are generated for each case reducer function
export const { getError, getSuccess, getStart, increment, decrement, incrementByAmount } = authSlice.actions;

export const getAuthState = (rootState: any): AuthState => rootState[AUTH_FEATURE_KEY];

export const fetchAuthEntity = () => ({
    type: getStart.type,
});

export const fetchEpic = (
    action$,
    state$,
    {Api}: {Api: {auth: AuthClient}}
) => action$.pipe(
    ofType(getStart.type),
    switchMap(() => (Api.auth.getTodos() as Observable<any>).pipe(
        tap(r=> console.log(r)),
        map((convertedData) => getSuccess(convertedData)),
        tap(r=> console.log(r, 'converted')),
        catchError((err) => of(getError(err))),
    )),
);

export const selectValueNumber = createSelector(
    getAuthState,
    (s) => s.value,
);

export const selectEntity = createSelector(
    getAuthState,
    (s) => s.entity,
);