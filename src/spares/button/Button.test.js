import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

const div = document.createElement('div');

it('renders <Button /> without crashing', () => {
  ReactDOM.render(<Button>click</Button>, div);
});

it('renders <Button submit /> without crashing', () => {
  const button = ReactDOM.render(<Button submit>click</Button>, div);
  expect(button.props.submit).toBeTruthy();
});

it('renders <Button onclick={} /> without crashing', () => {
  const button = ReactDOM.render(<Button onclick={function(){}}>click</Button>, div);
  expect(typeof button.props.onclick).toBe('function');

});

it('renders <Button color="" /> without crashing', () => {
  const button = ReactDOM.render(<Button color="primary">click</Button>, div);
  expect(button.props.color).toBeTruthy();
});

it('renders <Button disabled /> without crashing', () => {
  const button = ReactDOM.render(<Button disabled>click</Button>, div);
  expect(button.props.disabled).toBeTruthy();
});

it('renders <Button icon="" /> without crashing', () => {
  const button = ReactDOM.render(<Button icon="class">click</Button>, div);
  expect(button.props.icon).toBeTruthy();
});

it('renders <Button /> witch children without crashing', () => {
  const button = ReactDOM.render(<Button>click</Button>, div);
  expect(button.props.children[0]).toBeTruthy();
});
