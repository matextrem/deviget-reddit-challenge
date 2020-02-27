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

const posts = (state = { posts: [], loading: false }, action) => {
  switch (action.type) {
    case `${SET_POSTS}_FULFILLED`: {
      const { posts, after } = action.payload;
      return {
        ...state,
        loading: false,
        removedAll: false,
        posts: [...state.posts, ...posts],
        after,
      };
    }
    case `${SET_POSTS}_PENDING`: {
      return { ...state, loading: true };
    }
    case DISMISS_POST:
      let postId = action.payload;
      return {
        ...state,
        posts: [...state.posts.filter(post => post.id !== postId)],
      };
    case DISMISS_ALL:
      localStorage.removeItem('state');
      return {
        ...state,
        posts: [],
      };
    case SET_READ:
      return {
        ...state,
        posts: state.posts.map(post => ({
          ...post,
          read: post.id === action.payload ? true : post.read,
        })),
      };
    case SET_SELECTED:
      return {
        ...state,
        posts: state.posts.map(post => ({
          ...post,
          selected: post.id === action.payload,
        })),
      };
    case SET_REMOVE:
      return {
        ...state,
        posts: state.posts.map(post => ({
          ...post,
          removed: post.id === action.payload ? true : post.removed,
        })),
      };
    case SET_REMOVE_ALL:
      return {
        ...state,
        removedAll: true,
      };
    case ADD_GALLERY:
      return {
        ...state,
        posts: state.posts.map(post => ({
          ...post,
          inGallery: post.id === action.payload ? true : post.inGallery,
        })),
      };
    case REMOVE_GALLERY:
      return {
        ...state,
        posts: state.posts.map(post => ({
          ...post,
          inGallery: post.id === action.payload ? false : post.inGallery,
        })),
      };
    case `${RESTORE_ALL}_PENDING`:
      localStorage.removeItem('state');
      return { ...state, posts: [], loading: true };
    case `${RESTORE_ALL}_FULFILLED`:
      const { posts, after } = action.payload;
      return {
        ...state,
        loading: false,
        removedAll: false,
        posts: [...state.posts, ...posts],
        after,
      };
    default:
      return state;
  }
};

export default posts;
