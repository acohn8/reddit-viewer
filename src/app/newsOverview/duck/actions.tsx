import types from './types';

const setRedditPosts = (posts: []) => ({
  posts,
  type: types.SET_REDDIT_POSTS,
});

// interface SET_REDDIT_POSTS {
//   type: 'types.SET_REDDIT_POSTS';
// }
// type Action = SET_REDDIT_POSTS;

// export type Dispatch = (action: Action) => void;

export { setRedditPosts };
