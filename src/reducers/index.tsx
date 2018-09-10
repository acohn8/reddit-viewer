import * as constants from '../constants/index';

const initialState = {
  redditComments: [],
  redditPosts: [],
};

export function reducer(previousState = initialState, action: any) {
  switch (action.type) {
    case constants.SET_REDDIT_POSTS: {
      return { ...previousState, redditPosts: action.posts };
    }
    case constants.RESET_REDDIT_COMMENTS: {
      return { ...previousState, redditComments: [] };
    }
    case constants.SET_REDDIT_COMMENTS: {
      return { ...previousState, redditComments: action.comments };
    }
    default:
      return previousState;
  }
}
