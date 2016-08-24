import expect from 'expect';

import * as types from '../../src/actions/types';
import authReducer from '../../src/reducers/auth';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    const expectedReducer = {
      authenticated: false,
    };
    expect(authReducer(undefined, {})).toEqual(expectedReducer);
  })
});


