import axios from 'axios';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as actions from '../actions/index';
import { RedditPost } from '../containers/ArticleListContainer/ArticleListContainer';
import { parseApiResponse } from '../helpers/ParseApiResponse';
import { StoreState } from '../types';

export const fetchTopRedditPostOperation = () => async (
  dispatch: ThunkDispatch<StoreState, void, Action>,
) => {
  const url = 'https://www.reddit.com/r/all.json?kind=link';
  const response = await axios.get(url);
  const posts: [] = response.data.data.children.map((post: any) => post.data);
  const parsedResponse: RedditPost[] = parseApiResponse(posts);
  dispatch(actions.SetRedditPosts(parsedResponse));
};

export const fetchPostCommentsOperation = (commentsLink: string) => async (
  dispatch: ThunkDispatch<StoreState, void, Action>,
) => {
  const commentsUrl: string = `https://www.reddit.com${commentsLink}.json`;
  const commentsResponse = await axios.get(commentsUrl);
  const comments: [] = commentsResponse.data[1].data.children;
  console.log(comments);
};
