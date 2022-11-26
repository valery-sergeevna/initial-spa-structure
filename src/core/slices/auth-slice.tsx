import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

export const AUTH_FEATURE_KEY = 'auth';

export type AuthError = any;

export interface AuthState {
    value: number,
}

const initialState: AuthState = {
    value: 0,
}

export const authSlice = createSlice({
    name: AUTH_FEATURE_KEY,
    initialState: initialState as AuthState,
    reducers: {
        increment: (state) => {
            state.value += 1;
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
export const { increment, decrement, incrementByAmount } = authSlice.actions;

export const getAuthState = (rootState: any): AuthState => rootState[AUTH_FEATURE_KEY];

export const selectValueNumber = createSelector(
    getAuthState,
    (s) => s.value,
);