import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Counter from '../app.js';


describe('<Counter />', () => {

  it('Assert that state is being transferred to the DOM', () => {
    let test = mount(<Counter />);
    test.find('#rss1').simulate('click');
    expect(test.find('#text').text()).toBe('Counter[-1]');
  });

  it('Assert DOM stability via snapshot', ()=> {
    expect(renderer.create(<Counter />)).toMatchSnapshot();
  });
});
