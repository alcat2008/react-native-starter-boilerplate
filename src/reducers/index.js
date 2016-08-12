import { combineReducers } from 'redux';
import global from './global';
import device from './device';
import authentication from './auth';

export default combineReducers({
  global,
  device,
  authentication,
});
