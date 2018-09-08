import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';

import ArticlePreview from './ArticlePreviewComponent';

describe('ArticlePreviewComponent', () => {
  const output = shallow(<ArticlePreview
    link="www.newyorker.com"
    source="New Yorker"
    text="a cool article2"
    title="breaking"
    image="image.jpg"
    postDate={new Date(1536423624 * 1000)}
    icon="newspaper outline"
    upVotes={7}
    comments={5}
  />);
  it('should render correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should have an source', () => {
    expect(output.find('New Yorker'));
  });
  it('should have an image', () => {
    expect(output.find('image.jpg'));
  });
});
