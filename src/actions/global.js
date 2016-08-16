import * as types from './types';

import { getAuth, getToken } from '../persister';
import { setAuth } from './auth';

import { createAction } from 'redux-actions';

export const fetchStart = createAction(types.FETCH_START);
export const fetchEnd = createAction(types.FETCH_END);
export const setToken = createAction(types.SET_TOKEN);

export const initApp = () => dispatch => {
  getAuth()
    .then(authenticated => {
      dispatch(setAuth({ authenticated }));
    });

  getToken()
    .then(token => {
      dispatch(setToken({ token }));
    });
};
