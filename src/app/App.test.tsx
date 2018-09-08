import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';

import { App } from './App';
import { ArticleListContainer } from './newsOverview/containers/ArticleListContainer/ArticleListContainer';

describe('App', () => {
  it('renders without crashing', () => {
    const output = shallow(<App fetchTopRedditPostOperation={jest.fn()} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('renders ArticleListContainer', () => {
    const output = shallow(<App fetchTopRedditPostOperation={jest.fn()} />).dive();
    expect(output.find(ArticleListContainer));
  });
});
