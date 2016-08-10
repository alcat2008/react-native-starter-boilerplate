/* eslint-disable arrow-body-style */

import * as types from '../actions/types';
import { handleActions } from 'redux-actions';

const initialState = {
  isFetching: false,
  authenticated: false,
};

export default handleActions({
  [types.AUTHENTICATION_STARTED]: (state, action) => ({ // eslint-disable-line  no-unused-vars
    ...state,
    isFetching: true,
  }),
  [types.AUTHENTICATION_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    authenticated: action.payload.authenticated,
  }),
  [types.AUTHENTICATION_FAILED]: (state, action) => ({
    ...state,
    isFetching: false,
    authenticated: action.payload.authenticated,
  }),
}, initialState);
