import { expect } from 'chai';

// Reducer
import postReducer from '../../reducers/posts';

describe('Post Reducer', () => {
  it('should init default state', () => {
    const store = undefined;
    const action = {};

    const result = postReducer(store, action);
    expect(result.posts.length).to.equal(0);
    expect(result.loading).to.equal(false);
  });
});