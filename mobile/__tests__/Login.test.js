import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../components/Login';

test('renders correctly', () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});