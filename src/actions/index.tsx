import * as constants from '../constants/index';

export interface SetRedditPosts {
  posts: [];
  type: constants.SET_REDDIT_POSTS;
}

export function SetRedditPosts(posts: []): SetRedditPosts {
  return {
    posts,
    type: constants.SET_REDDIT_POSTS,
  };
}
