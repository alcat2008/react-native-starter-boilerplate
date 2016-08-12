import { combineReducers } from 'redux';
import global from './global';
import device from './device';
import auth from './auth';

export default combineReducers({
  global,
  device,
  auth,
});
