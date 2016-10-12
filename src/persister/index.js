
export const getAuth = () => new Promise(resolve => {
  const auth = [{ id: 1, authenticated: false }];
  if (auth.length === 0) {
    resolve(false);
  } else {
    resolve(auth[0].authenticated);
  }
});
export const setAuth = authenticated => new Promise(resolve => {
  resolve();
});

export const getToken = () => new Promise(resolve => {
    const global = [{ id: 1, token: '12312341234_ti' }];
    if (global.length === 0) {
      resolve('');
    } else {
      resolve(global[0].token);
    }
});
export const setToken = token => {};
