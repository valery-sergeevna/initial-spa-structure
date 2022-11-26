import {AUTH_FEATURE_KEY, AuthState} from "../core/slices/auth-slice";

export interface TypeStore {
    [AUTH_FEATURE_KEY]: AuthState,
}