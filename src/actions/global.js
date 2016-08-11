import * as types from './types';

import { createAction } from 'redux-actions';

export const fetchStart = createAction(types.FETCH_START);
export const fetchEnd = createAction(types.FETCH_END);
export const setSession = createAction(types.SET_SESSION);
