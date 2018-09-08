import axios from 'axios';
import { setRedditPosts } from './actions';

const fetchTopRedditPostOperation = () => async (dispatch: any) => {
  const url = 'https://www.reddit.com/r/all.json?kind=link';
  const response = await axios.get(url);
  const posts: [] = response.data.data.children.map((post: any) => post.data);
  dispatch(setRedditPosts(posts));
};

export { fetchTopRedditPostOperation };
