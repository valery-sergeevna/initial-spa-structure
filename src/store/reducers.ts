import {AUTH_FEATURE_KEY, authReducer} from "../core/slices";


export const rootReducer = {
    [AUTH_FEATURE_KEY]: authReducer,
};