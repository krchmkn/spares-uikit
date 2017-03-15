import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

it('renders <Header /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it('renders <Header center /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header center />, div);
});

it('renders <Header medium /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header medium />, div);
});

it('renders <Header small /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header small />, div);
});
