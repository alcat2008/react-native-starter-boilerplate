
import Realm from 'realm';

import { AUTH, AuthSchema, GLOBAL, GlobalSchema } from './schemas';

// eslint-disable-next-line no-console
console.log(Realm.defaultPath);

const _realm = new Realm({
  schema: [
    AuthSchema,
    GlobalSchema,
  ],
  schemaVersion: 1,
});

export const getAuth = () => new Promise(resolve => {
  _realm.write(() => {
    const auth = _realm.objects(AUTH);
    if (auth.length === 0) {
      resolve(false);
    } else {
      resolve(auth[0].authenticated);
    }
  });
});
export const setAuth = authenticated => new Promise(resolve => {
  _realm.write(() => {
    _realm.create(AUTH, { id: 1, authenticated }, true);
    resolve();
  });
});

export const getToken = () => new Promise(resolve => {
  _realm.write(() => {
    const global = _realm.objects(GLOBAL);
    if (global.length === 0) {
      resolve('');
    } else {
      resolve(global[0].token);
    }
  });
});
export const setToken = token => {
  _realm.write(() => {
    _realm.create(GLOBAL, { id: 1, token }, true);
  });
};
