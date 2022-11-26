import {AUTH_FEATURE_KEY, AuthState} from "../core/slices";

export interface TypeStore {
    [AUTH_FEATURE_KEY]: AuthState,
}