import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';

import ArticlePreview from '../../components/ArticlePreviewComponent/ArticlePreviewComponent';
import { ArticleListContainer, RedditPost } from './ArticleListContainer';

describe('ArticlePreview', () => {
  const redditPosts: RedditPost[] = [
    {
      created_utc: 1536423624,
      description: 'a cool article2',
      icon: 'newspaper outline',
      num_comments: 5,
      permalink: 'www.newyorker.com',
      subreddit_name_prefixed: 'New Yorker',
      thumbnail: 'image.jpg',
      title: 'breaking',
      ups: 7,
      url: 'www.newyorker.com',
    },
    {
      created_utc: 1536423624,
      description: 'a cool article2',
      icon: 'newspaper outline',
      num_comments: 5,
      permalink: 'www.newyorker.com',
      subreddit_name_prefixed: 'New Yorker',
      thumbnail: 'image.jpg',
      title: 'breaking',
      ups: 7,
      url: 'www.newyorker.com',
    },
    {
      created_utc: 1536423624,
      description: 'a cool article2',
      icon: 'newspaper outline',
      num_comments: 5,
      permalink: 'www.newyorker.com',
      subreddit_name_prefixed: 'New Yorker',
      thumbnail: 'image.jpg',
      title: 'breaking',
      ups: 7,
      url: 'www.newyorker.com',
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
