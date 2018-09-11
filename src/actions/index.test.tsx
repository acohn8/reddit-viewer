import configureStore from 'redux-mock-store';

import * as constants from '../constants/index';
import sampleRedditComment from '../testData/sampleRedditComment';
import sampleRedditPost from '../testData/sampleRedditPost';
import { RedditComment, RedditPost } from '../types';
import * as actions from './index';

const middlewares: [] = []; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);
const initialState = {};
const store = mockStore(initialState);

describe('actions', () => {
  it('should create an action to add posts', () => {
    const posts: RedditPost[] = [sampleRedditPost, sampleRedditPost];
    store.dispatch(actions.SetRedditPosts(posts));
    const expectedAction = {
      posts,
      type: constants.SET_REDDIT_POSTS,
    };
    expect(actions.SetRedditPosts(posts)).toEqual(expectedAction);
  });
  it('should create an action to add comments', () => {
    const comments: RedditComment[] = [sampleRedditComment, sampleRedditComment];
    store.dispatch(actions.SetRedditComments(comments));
    const expectedAction = {
      comments,
      type: constants.SET_REDDIT_COMMENTS,
    };
    expect(actions.SetRedditComments(comments)).toEqual(expectedAction);
  });
  it('should create an action to remove comments', () => {
    store.dispatch(actions.ResetComments());
    const expectedAction = {
      type: constants.RESET_REDDIT_COMMENTS,
    };
    expect(actions.ResetComments()).toEqual(expectedAction);
  });
});
