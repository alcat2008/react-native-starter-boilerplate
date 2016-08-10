import * as types from '../actions/actiontypes';

import { handleActions } from 'redux-actions';

const initialState = {
  isFetching: false,
  authenticated: false,
};

export default handleActions({
  [types.AUTHENTICATION_STARTED]: (state, action) => { // eslint-disable-line  no-unused-vars
    return {
      ...state,
      isFetching: true,
    };
  },
  [types.AUTHENTICATION_SUCCESS]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      authenticated: action.payload.authenticated,
    };
  },
  [types.AUTHENTICATION_FAILED]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      authenticated: action.payload.authenticated,
    };
  },
}, initialState);
