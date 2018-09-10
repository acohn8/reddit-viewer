import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';

import ArticlePreview from '../../components/ArticlePreviewComponent/ArticlePreviewComponent';
import { ArticleListContainer, RedditPost } from './ArticleListContainer';

describe('ArticlePreview', () => {
  const redditPosts: RedditPost[] = [
    {
      comments: 5,
      image: 'image.jpg',
      link: 'www.newyorker.com',
      permalink: 'newyorker.com',
      postDate: 'yesterday',
      source: 'New Yorker',
      title: 'breaking',
      upVotes: 7,
    },
    {
      comments: 5,
      image: 'image.jpg',
      link: 'www.newyorker.com',
      permalink: 'newyorker.com',
      postDate: 'yesterday',
      source: 'New Yorker',
      title: 'breaking',
      upVotes: 7,
    },
  ];
  it('should render correctly', () => {
    const output = shallow(<ArticleListContainer redditPosts={redditPosts} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render an ArticlePreview for each article in its array of props', () => {
    const output = shallow(<ArticleListContainer redditPosts={redditPosts} />).dive();
    expect(output.find(ArticlePreview).length).toEqual(2);
  });
  it('should not render any ArticlePreview items when given an empty array', () => {
    const output = shallow(<ArticleListContainer redditPosts={[]} />).dive();
    expect(output.find(ArticlePreview).length).toEqual(0);
  });
});
