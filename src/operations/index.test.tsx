import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../actions/index';
import * as constants from '../constants/index';
import { parsePostResponse } from '../helpers/parsePostResponse';
import sampleAllResponse from '../testData/sampleAllResponse';
import sampleRedditPost from '../testData/sampleRedditPost';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  it('creates SET_REDDIT_POSTS when fetching posts has been done', () => {
    const formattedResponse = sampleAllResponse.data.data.children.map((post: any) => post.data);
    const parsedResponse = parsePostResponse(formattedResponse);

    const expectedActions = [{ posts: [sampleRedditPost], type: constants.SET_REDDIT_POSTS }];
    const store = mockStore({ redditPosts: [] });

    store.dispatch(actions.SetRedditPosts(parsedResponse));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('creates SET_REDDIT_COMMENTS when fetching comments has been done', () => {
    const formattedResponse = sampleAllResponse.data.data.children.map((post: any) => post.data);
    const parsedResponse = parsePostResponse(formattedResponse);

    const expectedActions = [{ posts: [sampleRedditPost], type: constants.SET_REDDIT_POSTS }];
    const store = mockStore({ redditPosts: [] });

    store.dispatch(actions.SetRedditPosts(parsedResponse));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
