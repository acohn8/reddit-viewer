import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';

import { ArticleListContainer } from '../src/containers/ArticleListContainer/ArticleListContainer';
import { App } from './App';

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
