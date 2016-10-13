
import _ from 'lodash';
import LocalKeyStore from './LocalKeyStore';

const STORAGE_KEY_GLOBAL = 'global';
const _global = {
  authenticated: false,
  token: '',
};

export const getAuth = () =>
  LocalKeyStore.get(STORAGE_KEY_GLOBAL)
    .then(data => {
      _.assign(_global, data);
      return _global.authenticated;
    });

// eslint-disable-next-line no-unused-vars
export const setAuth = authenticated => {
  _.assign(_global, {
    authenticated
  });
  LocalKeyStore.set(STORAGE_KEY_GLOBAL, _global);
};

export const getToken = () =>
  LocalKeyStore.get(STORAGE_KEY_GLOBAL)
    .then(data => {
      _.assign(_global, data);
      return _global.token;
    });

// eslint-disable-next-line no-unused-vars
export const setToken = token => {
  _.assign(_global, {
    token
  });
  LocalKeyStore.set(STORAGE_KEY_GLOBAL, _global);
};
