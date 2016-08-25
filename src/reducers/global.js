import * as types from '../actions/types';
import { handleActions } from 'redux-actions';

const initialState = {
  isFetching: false,
  token: '',
};

export default function global(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_END:
      return {
        ...state,
        isFetching: false,
      };
    case types.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
}
