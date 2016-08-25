
export const AUTH = 'auth';
export const AuthSchema = {
  name: AUTH,
  primaryKey: 'id',
  properties: {
    id: 'int',
    authenticated: { type: 'bool', default: false },
  }
};

export const GLOBAL = 'global';
export const GlobalSchema = {
  name: GLOBAL,
  primaryKey: 'id',
  properties: {
    id: 'int',
    token: { type: 'string', optional: true },
  }
};

