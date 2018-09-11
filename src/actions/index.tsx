import * as constants from '../constants/index';
import { RedditPost } from '../containers/ArticleListContainer/ArticleListContainer';
import { RedditComment } from '../containers/CommentsContainer/CommentContainer';

export interface SetRedditPosts {
  posts: RedditPost[];
  type: constants.SET_REDDIT_POSTS;
}

export interface SetComments {
  comments: RedditComment[];
  type: constants.SET_REDDIT_COMMENTS;
}

export interface ResetComments {
  type: constants.RESET_REDDIT_COMMENTS;
}

export const SetRedditPosts = (posts: RedditPost[]): SetRedditPosts => ({
  posts,
  type: constants.SET_REDDIT_POSTS,
});

export const SetRedditComments = (comments: RedditComment[]): SetComments => ({
  comments,
  type: constants.SET_REDDIT_COMMENTS,
});

export const ResetComments = (): ResetComments => ({
  comments: [],
  type: constants.RESET_REDDIT_COMMENTS,
});
