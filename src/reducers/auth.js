/* eslint-disable arrow-body-style */

import * as types from '../actions/types';

const initialState = {
  authenticated: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.SET_AUTH:
      return {
        ...state,
        authenticated: action.payload,
      };

    case types.AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true,
      };

    case types.AUTH_FAILED:
      return {
        ...state,
        authenticated: false,
      };

    default:
      return state;
  }
}

