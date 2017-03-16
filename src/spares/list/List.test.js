import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

const div = document.createElement('div');

it('renders <List /> without crashing', () => {
  ReactDOM.render(<List items={[]} />, div);
});
