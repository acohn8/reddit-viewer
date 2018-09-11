import { formatDate } from '../helpers/formatDate';
import { RedditPost } from '../types';

const sampleRedditPost: RedditPost = {
  comments: 779,
  image: 'https://a.thumbs.redditmedia.com/7cbv9wWLbB3c9XRq4kbhuGcDn4pH4gr3NWE-F2a6bD8.jpg',
  link: 'https://gfycat.com/physicallongalaskankleekai',
  permalink: '/r/sports/comments/9exvr3/andrea_iannone_headbutts_seagull_at_motogp/',
  postDate: formatDate(1536674990),
  source: 'r/sports',
  title: 'Andrea Iannone headbutts seagull at MotoGP Australia',
  upVotes: 21663,
};

export default sampleRedditPost;
