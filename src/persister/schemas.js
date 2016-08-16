
export const AUTH = 'auth';
export const AuthSchema = {
  name: AUTH,
  properties: {
    authenticated: { type: 'bool', default: false },
  }
};

export const GLOBAL = 'global';
export const GlobalSchema = {
  name: GLOBAL,
  properties: {
    token: { type: 'string', optional: true },
  }
};

