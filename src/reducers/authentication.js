/* eslint-disable arrow-body-style */

import * as types from '../actions/types';
import { handleActions } from 'redux-actions';

const initialState = {
  authenticated: false,
};

export default handleActions({
  [types.AUTHENTICATION_SUCCESS]: (state, action) => ({
    ...state,
    authenticated: action.payload.authenticated,
  }),
  [types.AUTHENTICATION_FAILED]: (state, action) => ({
    ...state,
    authenticated: action.payload.authenticated,
  }),
}, initialState);
