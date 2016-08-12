import * as types from './types';

import { createAction } from 'redux-actions';
import { fetchStart, fetchEnd, setSession } from './global';

// export const authenticationStarted = (): Object => {
//   return {
//     type: types.AUTH_STARTED
//   };
// };
export const authenticationStarted = createAction(types.AUTH_STARTED);

// export const authenticationSuccess = (data: Object): Object => {
//   return {
//     type: types.AUTH_SUCCESS,
//     data
//   };
// };
export const authenticationSuccess = createAction(types.AUTH_SUCCESS);

// export const authenticationFailed = (data: Object): Object => {
//   return {
//     type: types.AUTH_FAILED,
//     data
//   };
// };
export const authenticationFailed = createAction(types.AUTH_FAILED);


export const fetchAuthentication = (phone) => dispatch => {
  dispatch(fetchStart());
  return new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    setTimeout(() => {
      resolve({
        token: phone + '_ti',
      });
      // reject({
      //   message: 'token 获取失败'
      // });
    }, 3000);
  })
  .then(response => {
    return dispatch(setSession(response));
  })
  .then(() => {
    dispatch(fetchEnd());
    dispatch(authenticationSuccess());
  })
  .catch(errorData => {
    dispatch(fetchEnd());
    dispatch(authenticationFailed());
    throw new Error(errorData.message);
  });
};

// export const fetchAuthentication = () => async (dispatch) => {
//   dispatch(authenticationStarted());
//   const payload = await new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
//     setTimeout(() => {
//       resolve({
//         authenticated: true
//       });
//     }, 3000);
//   });
//   dispatch(authenticationSuccess(payload));
// };
