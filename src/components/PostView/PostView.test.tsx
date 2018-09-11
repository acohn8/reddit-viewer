import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';

import  PostView  from './Postview';

describe('PostView', () => {
  const output = shallow(<PostView title="breaking" image="image.jpg" permalink='reddit.com' date='yesterday'  />
  it('should render correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should have a title', () => {
    expect(output.find('breaking'));
  });
  it('should have an image', () => {
    expect(output.find('image.jpg'));
  });
});
