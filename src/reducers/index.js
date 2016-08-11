import { combineReducers } from 'redux';
import global from './global';
import device from './device';
import authentication from './authentication';

export default combineReducers({
  global,
  device,
  authentication,
});
