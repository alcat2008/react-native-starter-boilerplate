// wrapper on local storage technique
import { AsyncStorage } from 'react-native';

const STORAGE_ERROR_NULL_KEY = 'Parameter key could not be null';

const LocalKeyStore = {
  get(key) {
    if (!key) return Promise.reject(STORAGE_ERROR_NULL_KEY);
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key)
        .then(value => resolve(JSON.parse(value)))
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log('Error get item (' + key + ') from local storage! ' + error.message);
          reject(error);
        });
    });
  },

  set(key, value) {
    if (!key) return Promise.reject(STORAGE_ERROR_NULL_KEY);
    if (value) {
      const encoded = JSON.stringify(value);
      return AsyncStorage.setItem(key, encoded);
    }

    // Delete if value is null
    return LocalKeyStore.delete(key);
  },

  delete(key) {
    if (!key) return Promise.reject(STORAGE_ERROR_NULL_KEY);
    return AsyncStorage.removeItem(key);
  },

  clear() {
    return AsyncStorage.clear();
  }
};

export default LocalKeyStore;
