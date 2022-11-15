import React from 'react';
import renderer from 'react-test-renderer';
import Homepage from '../components/home/Homepage'

test('renders correctly', () => {
  const tree = renderer.create(<Homepage />).toJSON();
  expect(tree).toMatchSnapshot();
});