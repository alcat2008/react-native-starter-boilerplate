import { combineReducers } from 'redux';
import device from './device';
import authentication from './authentication';

export default combineReducers({
  device,
  authentication,
});
