import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

it('renders <List /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List items={[]} />, div);
});
