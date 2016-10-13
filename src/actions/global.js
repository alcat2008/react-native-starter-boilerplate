import { createAction } from 'redux-actions';
import * as types from './types';
import * as Persister from '../persister';
import { setAuth } from './auth';

export const fetchStart = createAction(types.FETCH_START);
export const fetchEnd = createAction(types.FETCH_END);
export const setToken = createAction(types.SET_TOKEN);

export const initApp = () => dispatch => {
  Persister.getAuth()
    .then(authenticated => {
      dispatch(setAuth(authenticated));
    });

  Persister.getToken()
    .then(token => {
      dispatch(setToken(token));
    });
};
