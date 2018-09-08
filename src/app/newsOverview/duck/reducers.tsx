import types from './types';

const initialState = {
  redditPosts: [],
};

const articleReducer = (previousState = initialState, action: any) => {
  switch (action.type) {
    case types.SET_REDDIT_POSTS: {
      return { ...previousState, redditPosts: action.posts };
    }
    default:
      return previousState;
  }
};

export interface Store {
  article: {
    redditPosts: [];
  };
}

export default articleReducer;
