import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';

import ArticlePreview from './ArticlePreviewComponent';

describe('ArticlePreviewComponent', () => {
  const output = shallow(<ArticlePreview
    source="New Yorker"
    link="www.newyorker.com"
    permalink="www.newyorker.com"
    postDate="yesterday"
    title="breaking"
    image="image.jpg"
    icon="newspaper outline"
    upVotes={7}
    comments={5}
  />);
  it('should render correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should have a source', () => {
    expect(output.find('New Yorker'));
  });
  it('should have a title', () => {
    expect(output.find('breaking'));
  });
  it('should have a icon', () => {
    expect(output.find('newspaper outline'));
  });
  it('should have an image', () => {
    expect(output.find('image.jpg'));
  });
});
