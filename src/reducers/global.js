import * as types from '../actions/types';
import { handleActions } from 'redux-actions';

const initialState = {
  isFetching: false,
  token: '',
};

export default handleActions({
  [types.FETCH_START]: (state, action) => ({ // eslint-disable-line  no-unused-vars
    ...state,
    isFetching: true,
  }),
  [types.FETCH_END]: (state, action) => ({
    ...state,
    isFetching: false,
  }),
  [types.SET_SESSION]: (state, action) => ({
    ...state,
    token: action.payload.token,
  }),
}, initialState);
