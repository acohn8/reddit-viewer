import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as actions from '../actions/index';
import { parseCommentResponse } from '../helpers/parseCommentResponse';
import { parsePostResponse } from '../helpers/parsePostResponse';
import { RedditComment, RedditPost, StoreState } from '../types';

export const fetchTopRedditPostOperation = () => async (
  dispatch: ThunkDispatch<StoreState, void, AnyAction>,
) => {
  const url: string = 'https://www.reddit.com/r/all.json?kind=link';
  const response = await axios.get(url);
  const posts: [] = response.data.data.children.map((post: { data: [] }) => post.data);
  const parsedResponse: RedditPost[] = parsePostResponse(posts);
  return dispatch(actions.SetRedditPosts(parsedResponse));
};

export const fetchPostCommentsOperation = (commentsLink: string) => async (
  dispatch: ThunkDispatch<StoreState, void, AnyAction>,
) => {
  const commentsUrl: string = `https://www.reddit.com${commentsLink}comments.json`;
  const commentsResponse = await axios.get(commentsUrl);
  const comments: [] = commentsResponse.data[1].data.children;
  const parsedComments: RedditComment[] = parseCommentResponse(comments);
  return dispatch(actions.SetRedditComments(parsedComments));
};
