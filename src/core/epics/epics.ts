import { combineEpics } from 'redux-observable';
import {fetchRolesEpic, loginUserEpic, registerUserEpic} from "../slices";


export const rootEpic = combineEpics(
    fetchRolesEpic,
    registerUserEpic,
    loginUserEpic,
);