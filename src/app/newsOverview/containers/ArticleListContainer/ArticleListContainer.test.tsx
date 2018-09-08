import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';

import { ArticleListContainer, RedditPost } from './ArticleListContainer';
import ArticlePreview from '../../components/ArticlePreviewComponent/ArticlePreviewComponent';

describe('ArticlePreview', () => {
  const redditPosts: RedditPost[] = [
    {
      subreddit_name_prefixed: 'New Yorker',
      permalink: 'www.newyorker.com',
      url: 'www.newyorker.com',
      created_utc: 1536423624,
      description: 'a cool article2',
      thumbnail: 'image.jpg',
      title: 'breaking',
      icon: 'newspaper outline',
      num_comments: 5,
      ups: 7,
    },
    {
      subreddit_name_prefixed: 'New Yorker',
      permalink: 'www.newyorker.com',
      url: 'www.newyorker.com',
      created_utc: 1536423624,
      description: 'a cool article2',
      thumbnail: 'image.jpg',
      title: 'breaking',
      icon: 'newspaper outline',
      num_comments: 5,
      ups: 7,
    },
    {
      subreddit_name_prefixed: 'New Yorker',
      permalink: 'www.newyorker.com',
      url: 'www.newyorker.com',
      created_utc: 1536423624,
      description: 'a cool article2',
      thumbnail: 'image.jpg',
      title: 'breaking',
      icon: 'newspaper outline',
      num_comments: 5,
      ups: 7,
    },
  ];
  it('should render correctly', () => {
    const output = shallow(<ArticleListContainer redditPosts={redditPosts} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render an ArticlePreview for each article in its array of props', () => {
    const output = shallow(<ArticleListContainer redditPosts={redditPosts} />).dive();
    expect(output.find(ArticlePreview).length).toEqual(3);
  });
  it('should not render any ArticlePreview items when given an empty array', () => {
    const output = shallow(<ArticleListContainer redditPosts={[]} />).dive();
    expect(output.find(ArticlePreview).length).toEqual(0);
  });
});
