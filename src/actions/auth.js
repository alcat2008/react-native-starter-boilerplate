
import { createAction } from 'redux-actions';
import { fetchStart, fetchEnd, setToken } from './global';
import * as Persister from '../persister';
import * as types from './types';

export const setAuth = createAction(types.SET_AUTH);

export const authSuccess = createAction(types.AUTH_SUCCESS);

export const authFailed = createAction(types.AUTH_FAILED);

export const logout = () => dispatch => {
  Persister.setAuth(false);
  dispatch(setAuth(false));

  Persister.setToken('');
  dispatch(setToken(''));
};

export const fetchAuthentication = phone => dispatch => {
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
    dispatch(fetchEnd());
    Persister.setToken(response.token);
    dispatch(setToken(response.token));
  })
  .then(() => {
    Persister.setAuth(true);
    dispatch(authSuccess());
  })
  .catch(errorData => {
    dispatch(fetchEnd());
    dispatch(authFailed());
    throw new Error(errorData.message);
  });
};

// export const fetchAuthentication = () => async (dispatch) => {
//   dispatch(authStarted());
//   const payload = await new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
//     setTimeout(() => {
//       resolve({
//         authenticated: true
//       });
//     }, 3000);
//   });
//   dispatch(authSuccess(payload));
// };
