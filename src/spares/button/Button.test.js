import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

it('renders <Button /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button>click</Button>, div);
});

it('renders <Button submit /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button submit>click</Button>, div);
});

it('renders <Button onclick={} /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button onclick={function(){}}>click</Button>, div);
});

it('renders <Button color="" /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button color="primary">click</Button>, div);
});

it('renders <Button disabled /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button disabled>click</Button>, div);
});

it('renders <Button icon="" /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button icon="">click</Button>, div);
});
