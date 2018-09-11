import * as actions from './index';
import configureStore from 'redux-mock-store';
// import * as thunk from 'redux-thunk';
import * as constants from '../constants/index';
import { RedditPost } from '../containers/ArticleListContainer/ArticleListContainer';
import { RedditComment } from '../containers/CommentsContainer/CommentContainer';
// import { RedditComment } from '../containers/CommentsContainer/CommentContainer';

const middlewares: [] = []; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);
const initialState = {};
const store = mockStore(initialState);

const redditPost: RedditPost = {
  comments: 2082,
  image:
    'https://i.redditmedia.com/btnDoopjMYC7ITFkoualvhxFk0msUAQhG8rI0m-tnuk.jpg?s=0f097e1d75dff2f00bd77ccdc5c8cb70',
  link: 'https://i.imgur.com/3hIib.jpg',
  permalink: '/r/pics/comments/9exl29/on_911_i_like_to_remind_people_who_make_fun_of/',
  postDate: '3 hours ago',
  source: 'r/pics',
  title: 'On 9/11 I like to remind people who make fun of the French of this photo',
  upVotes: 42605,
};

const redditComment: RedditComment = {
  parent: {
    id: 't1_e5sg34b',
    body: 'and bankrupting themselves supporting the US in the revolutionary war',
    author: 'OfficialAlectPrasad',
    upVotes: 4962,
    postTime: 'an hour ago',
  },
  replies: [
    {
      id: 't1_e5sbjf2',
      body: "We don't talk about her. She wants poor people to come here.",
      author: 'Mucky38302',
      upVotes: 1824,
      postTime: '2 hours ago',
    },
  ],
};

describe('actions', () => {
  it('should create an action to add posts', () => {
    const posts: RedditPost[] = [redditPost, redditPost];
    store.dispatch(actions.SetRedditPosts(posts));
    const expectedAction = {
      type: constants.SET_REDDIT_POSTS,
      posts,
    };
    expect(actions.SetRedditPosts(posts)).toEqual(expectedAction);
  });
  it('should create an action to add comments', () => {
    const comments: RedditComment[] = [redditComment, redditComment];
    store.dispatch(actions.SetRedditComments(comments));
    const expectedAction = {
      type: constants.SET_REDDIT_COMMENTS,
      comments,
    };
    expect(actions.SetRedditComments(comments)).toEqual(expectedAction);
  });
  it('should create an action to remove comments', () => {
    store.dispatch(actions.ResetComments());
    const expectedAction = {
      comments: [],
      type: constants.RESET_REDDIT_COMMENTS,
    };
    expect(actions.ResetComments()).toEqual(expectedAction);
  });
});
