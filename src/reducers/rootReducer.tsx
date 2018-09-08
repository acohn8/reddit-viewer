import { combineReducers } from 'redux';
import articleReducer from '../app/newsOverview/duck/reducers';

const rootReducer = combineReducers({
  article: articleReducer,
});

export interface Store {
  article: {
    redditPosts: [];
  };
}

export default rootReducer;
