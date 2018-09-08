import { SetRedditPosts } from '../actions/index';
import * as constants from '../constants/index';

const initialState = {
  redditPosts: [],
};

export function reducer(previousState = initialState, action: SetRedditPosts) {
  switch (action.type) {
    case constants.SET_REDDIT_POSTS: {
      return { ...previousState, redditPosts: action.posts };
    }
    default:
      return previousState;
  }
}
