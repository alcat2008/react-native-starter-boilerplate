import * as types from './actiontypes';

export const authenticationStarted = (): Object => {
  return {
    type: types.AUTHENTICATION_STARTED
  };
};

export const authenticationSuccess = (data: Object): Object => {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    data
  };
};

export const authenticationFailed = (data: Object): Object => {
  return {
    type: types.AUTHENTICATION_FAILED,
    data
  };
};

export const fetchAuthentication = () => (dispatch) => {
  dispatch(authenticationStarted());
  dispatch(new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    setTimeout(() => {
      const data = {
        authenticated: true
      };
      resolve(dispatch(authenticationSuccess(data)));
    }, 3000);
  }));
};
