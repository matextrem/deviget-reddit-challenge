import { BASE_URI, POSTS_PER_PAGE } from '../utils/constants';
import { api } from './';

export const getPosts = async params => {
  const result = await api.get('/r/all/top.json', {
    params: { ...params, limit: POSTS_PER_PAGE },
  });

  return {
    after: result.data.data.after,
    posts: result.data.data.children.map(post => ({
      id: post.data.id,
      title: post.data.title,
      url: `${BASE_URI}/${post.data.permalink}`,
      preview: post.data.url,
      author: post.data.author,
      thumbnail: post.data.thumbnail,
      comments: post.data.num_comments,
      created: post.data.created_utc,
      selected: false,
      removed: false,
      read: false,
    })),
  };
};
