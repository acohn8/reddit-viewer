import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';

import ArticlePreview from '../../components/ArticlePreviewComponent/ArticlePreviewComponent';
import { ArticleListContainer, RedditPost } from './ArticleListContainer';

describe('ArticlePreview', () => {
  const redditPosts: RedditPost[] = [
    {
      source: 'New Yorker',
      link: 'www.newyorker.com',
      permalink: 'newyorker.com',
      postDate: new Date(1536423624),
      image: 'image.jpg',
      title: 'breaking',
      comments: 5,
      upVotes: 7,
    },
    {
      source: 'New Yorker',
      link: 'www.newyorker.com',
      permalink: 'newyorker.com',
      postDate: new Date(1536423624),
      image: 'image.jpg',
      title: 'breaking',
      comments: 5,
      upVotes: 7,
    },
  ];
  it('should render correctly', () => {
    const output = shallow(<ArticleListContainer redditPosts={redditPosts} fetchPostCommentsOperation={jest.fn()} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render an ArticlePreview for each article in its array of props', () => {
    const output = shallow(<ArticleListContainer redditPosts={redditPosts} fetchPostCommentsOperation={jest.fn()} />).dive();
    expect(output.find(ArticlePreview).length).toEqual(2);
  });
  it('should not render any ArticlePreview items when given an empty array', () => {
    const output = shallow(<ArticleListContainer redditPosts={[]} fetchPostCommentsOperation={jest.fn()} />).dive();
    expect(output.find(ArticlePreview).length).toEqual(0);
  });
});
