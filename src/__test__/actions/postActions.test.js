import { expect } from 'chai';
import allActions from '../../actions';

import {
  SET_POSTS,
  DISMISS_POST,
  DISMISS_ALL,
  SET_READ,
  SET_SELECTED,
  SET_REMOVE,
  SET_REMOVE_ALL,
  ADD_GALLERY,
  REMOVE_GALLERY,
  RESTORE_ALL,
} from '../../utils/constants';

describe('Posts Actions', () => {
  it('should set posts properly when initial home page is loaded', () => {
    expect(allActions.postActions.setPosts().type).to.deep.equals(SET_POSTS);
  });

  it('should trigger dismiss post action', function() {
    expect(allActions.postActions.dismissPost().type).to.equals(DISMISS_POST);
  });
  it('should trigger dismiss all the posts', function() {
    expect(allActions.postActions.dismissAll().type).to.equals(DISMISS_ALL);
  });

  it('should trigger read post action', function() {
    expect(allActions.postActions.setRead().type).to.deep.equals(SET_READ);
  });

  it('should trigger select post action', function() {
    expect(allActions.postActions.setSelected().type).to.equals(SET_SELECTED);
  });

  it('should trigger remove post animation action', function() {
    expect(allActions.postActions.setRemove().type).to.equals(SET_REMOVE);
  });

  it('should trigger remove posts animation action', function() {
    expect(allActions.postActions.setRemoveAll().type).to.equals(
      SET_REMOVE_ALL,
    );
  });
  it('should trigger add to gallery action', function() {
    expect(allActions.postActions.addGallery().type).to.equals(ADD_GALLERY);
  });
  it('should trigger remove from gallery action', function() {
    expect(allActions.postActions.removeGallery().type).to.equals(
      REMOVE_GALLERY,
    );
  });
  it('should trigger restore all the posts action', function() {
    expect(allActions.postActions.restoreAll().type).to.equals(RESTORE_ALL);
  });
});
