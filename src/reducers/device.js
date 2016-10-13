/* eslint-disable arrow-body-style */

import { Dimensions, Platform } from 'react-native';
import { handleActions } from 'redux-actions';
import * as types from '../actions/types';

const initialState = {
  platform: Platform.OS,
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  statusBarHeight: 0,
  innerStatusBarSize: 0,
  navBarHeight: 0,
};

export default handleActions({
  [types.DEVICE_PLATFORM]: (state, action) => ({ // eslint-disable-line  no-unused-vars
    ...state,
    ...action.payload,
  }),
  [types.SET_LAYOUT]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
}, initialState);
