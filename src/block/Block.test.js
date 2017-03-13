import React from 'react';
import ReactDOM from 'react-dom';
import Block from './Block';

it('renders <Block /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Block>block</Block>, div);
});

it('renders <Block flex /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Block flex>flex block</Block>, div);
});
