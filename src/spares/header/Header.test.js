import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

const div = document.createElement('div');

it('renders <Header /> without crashing', () => {
  ReactDOM.render(<Header />, div);
});

it('renders <Header center /> without crashing', () => {
  const header = ReactDOM.render(<Header center />, div);
  expect(header.props.center).toBeTruthy();
});

it('renders <Header medium /> without crashing', () => {
  const header = ReactDOM.render(<Header medium />, div);
  expect(header.props.medium).toBeTruthy();
});

it('renders <Header small /> without crashing', () => {
  const header = ReactDOM.render(<Header small />, div);
  expect(header.props.small).toBeTruthy();
});

it('renders <Header /> with chidren without crashing', () => {
  const header = ReactDOM.render(<Header>header</Header>, div);
  expect(header.props.children[0]).toBeTruthy();
});
