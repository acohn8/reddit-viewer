import axios from 'axios';
import { Action } from 'redux';

import { ThunkDispatch } from 'redux-thunk';

import * as actions from '../actions/index';
import { StoreState } from '../types';

export function fetchTopRedditPostOperation() {
  return async (dispatch: ThunkDispatch<StoreState, void, Action>) => {
    const url = 'https://www.reddit.com/r/all.json?kind=link';
    const response = await axios.get(url);
    const posts: [] = response.data.data.children.map((post: any) => post.data);
    dispatch(actions.SetRedditPosts(posts));
  };
}
