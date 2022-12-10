import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { ofType } from 'redux-observable';
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {AuthClient} from "../../api";
import {LoginParams, RegisterParams, RolesProps} from "../common-entities";

export const AUTH_FEATURE_KEY = 'auth';

export type AuthError = any;

export interface AuthState {
    roles: RolesProps[],
    errorRoles: AuthError;
    authErrors: AuthError,
}

const initialState: AuthState = {
    roles: [],
    errorRoles: null,
    authErrors: null,
};

export const authSlice = createSlice({
    name: AUTH_FEATURE_KEY,
    initialState: initialState as AuthState,
    reducers: {
        getRolesStart: () => {},
        registerStart: () => {},
        loginStart: () => {},
        getRolesSuccess: (state, action: PayloadAction<any>) => {
            const {response} = action.payload;
            state.roles = response.data;
        },
        registerSuccess: (state, action: PayloadAction<RegisterParams>) => {
        },
        loginSuccess: (state, action: PayloadAction<LoginParams>) => {
        },
        getRolesError: (state, action: PayloadAction<AuthError>) => {
            state.errorRoles = action.payload;
        },
        authErrors: (state, action: PayloadAction<AuthError>) => {
            const {response} = action.payload;
            state.authErrors = response.message;
        },
    },
});

export const authReducer = authSlice.reducer;

// Action creators are generated for each case reducer function
export const {
    getRolesError,
    getRolesSuccess,
    getRolesStart,
    registerStart,
    registerSuccess,
    authErrors,
    loginStart,
    loginSuccess,
} = authSlice.actions;

export const getAuthState = (rootState: any): AuthState => rootState[AUTH_FEATURE_KEY];

export const getAuthRoles = () => ({
    type: getRolesStart.type,
});

export const postUserData = (params: RegisterParams) => ({
    type: registerStart.type,
    payload: params
});

export const loginUser = (params: LoginParams) => ({
    type: loginStart.type,
    payload: params
});

export const selectAuthRoles = createSelector(
    getAuthState,
    (s) => s.roles,
);

export const selectAuthErrorRoles = createSelector(
    getAuthState,
    (s) => s.errorRoles,
);

export const selectAuthErrors = createSelector(
    getAuthState,
    (s) => s.authErrors,
);

export const fetchRolesEpic = (action$, state$, {Api}: {Api: {auth: AuthClient}}) => action$.pipe(
    ofType(getRolesStart.type),
    switchMap(() => (Api.auth.getRoles() as Observable<any>).pipe(
        map((convertedData) => getRolesSuccess(convertedData)),
        catchError((err) => of(getRolesError(err))),
    )),
);

export const registerUserEpic = (action$, state$, {Api}: {Api: {auth: AuthClient}}) => action$.pipe(
    ofType(registerStart.type),
    switchMap((action: {payload: RegisterParams}) => (Api.auth.registerUser(action.payload) as Observable<any>).pipe(
        tap(r=>console.log(r, 'r')),
        map((convertedData) => registerSuccess(convertedData)),
        catchError((err) => of(authErrors(err))),
    )),
);

export const loginUserEpic = (action$, state$, {Api}: {Api: {auth: AuthClient}}) => action$.pipe(
    ofType(loginStart.type),
    switchMap((action: {payload: RegisterParams}) => (Api.auth.loginUser(action.payload) as Observable<any>).pipe(
        tap(r=>console.log(r, 'r')),
        map((convertedData) => loginSuccess(convertedData)),
        catchError((err) => of(authErrors(err))),
    )),
);
