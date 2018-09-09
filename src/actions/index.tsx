import * as constants from '../constants/index';
import { RedditPost } from '../containers/ArticleListContainer/ArticleListContainer';

export interface SetRedditPosts {
  posts: RedditPost[];
  type: constants.SET_REDDIT_POSTS;
}

export const SetRedditPosts = (posts: RedditPost[]): SetRedditPosts => ({
  posts,
  type: constants.SET_REDDIT_POSTS,
});
