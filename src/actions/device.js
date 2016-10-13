import { createAction } from 'redux-actions';
import * as types from './types';

export const setPlatform = createAction(types.DEVICE_PLATFORM);
export const setLayout = createAction(types.SET_LAYOUT);
