import { combineEpics } from 'redux-observable';
import {fetchEpic} from "../slices";


export const rootEpic = combineEpics(
    fetchEpic,
);