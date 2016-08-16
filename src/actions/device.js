import * as types from './types';
import { createAction } from 'redux-actions';

export const setPlatform = createAction(types.DEVICE_PLATFORM);
export const setLayout = createAction(types.SET_LAYOUT);
