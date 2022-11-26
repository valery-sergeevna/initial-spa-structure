import { configureStore } from '@reduxjs/toolkit'
import {AUTH_FEATURE_KEY, authReducer} from "../core/slices/auth-slice";

export const store = configureStore({
    reducer: {
        [AUTH_FEATURE_KEY]: authReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;