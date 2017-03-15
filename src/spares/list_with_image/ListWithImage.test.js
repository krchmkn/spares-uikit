import React from 'react';
import ReactDOM from 'react-dom';
import ListWithImage from './ListWithImage';

it('renders <ListWithImage /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListWithImage items={[]} />, div);
});
