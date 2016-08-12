/* eslint-disable arrow-body-style */

import * as types from '../actions/types';
import { handleActions } from 'redux-actions';

const initialState = {
  authenticated: false,
};

export default handleActions({
  [types.AUTH_SUCCESS]: (state, action) => ({ // eslint-disable-line no-unused-vars
    ...state,
    authenticated: true,
  }),
  [types.AUTH_FAILED]: (state, action) => ({ // eslint-disable-line no-unused-vars
    ...state,
    authenticated: false,
  }),
}, initialState);
