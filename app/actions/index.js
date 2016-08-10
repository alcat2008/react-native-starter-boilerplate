import * as types from './actiontypes';

import { createAction } from 'redux-actions';

// export const authenticationStarted = (): Object => {
//   return {
//     type: types.AUTHENTICATION_STARTED
//   };
// };
export const authenticationStarted = createAction(types.AUTHENTICATION_STARTED);

// export const authenticationSuccess = (data: Object): Object => {
//   return {
//     type: types.AUTHENTICATION_SUCCESS,
//     data
//   };
// };
export const authenticationSuccess = createAction(types.AUTHENTICATION_SUCCESS);

// export const authenticationFailed = (data: Object): Object => {
//   return {
//     type: types.AUTHENTICATION_FAILED,
//     data
//   };
// };
export const authenticationFailed = createAction(types.AUTHENTICATION_FAILED);


export const fetchAuthentication = () => (dispatch) => {
  dispatch(authenticationStarted());
  dispatch(authenticationSuccess(new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    setTimeout(() => {
      resolve({
        authenticated: true
      });
    }, 3000);
  })));
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
