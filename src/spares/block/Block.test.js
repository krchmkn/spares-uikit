import React from 'react';
import ReactDOM from 'react-dom';
import Block from './Block';

const div = document.createElement('div');

it('renders <Block /> without crashing', () => {
  ReactDOM.render(<Block>block</Block>, div);
});

it('renders <Block flex /> without crashing', () => {
  const block = ReactDOM.render(<Block flex>flex block</Block>, div);
  expect(block.props.flex).toBeTruthy();
});
