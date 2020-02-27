import { getPosts } from '../services/posts';

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
} from '../utils/constants';

const setPosts = params => {
  return {
    type: SET_POSTS,
    payload: getPosts(params),
  };
};

const dismissPost = post => {
  return {
    type: DISMISS_POST,
    payload: post,
  };
};

const dismissAll = () => {
  return {
    type: DISMISS_ALL,
  };
};

const setRead = postId => {
  return {
    type: SET_READ,
    payload: postId,
  };
};

const setSelected = postId => {
  return {
    type: SET_SELECTED,
    payload: postId,
  };
};

const setRemove = postId => {
  return {
    type: SET_REMOVE,
    payload: postId,
  };
};

const setRemoveAll = () => {
  return {
    type: SET_REMOVE_ALL,
  };
};

const addGallery = postId => {
  return {
    type: ADD_GALLERY,
    payload: postId,
  };
};

const removeGallery = postId => {
  return {
    type: REMOVE_GALLERY,
    payload: postId,
  };
};

const restoreAll = params => {
  return {
    type: RESTORE_ALL,
    payload: getPosts(params),
  };
};

export default {
  setPosts,
  dismissPost,
  dismissAll,
  setRead,
  setSelected,
  setRemove,
  setRemoveAll,
  addGallery,
  removeGallery,
  restoreAll,
};
