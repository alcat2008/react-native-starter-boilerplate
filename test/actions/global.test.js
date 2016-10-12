import expect from 'expect'
import * as types from '../../src/actions/types';
import * as globalAction from '../../src/actions/global';


describe('global action', () => {
  it('should create an action to start fetch', () => {
    const text = 'Fetch start';
    const expectedAction = {
      type: types.FETCH_START,
      payload: text
    };
    expect(globalAction.fetchStart(text)).toEqual(expectedAction);
  })
});
