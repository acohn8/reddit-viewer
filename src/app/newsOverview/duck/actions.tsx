import types from './types';

const setRedditPosts = (posts: []) => ({
  posts,
  type: types.SET_REDDIT_POSTS,
});

export { setRedditPosts };
