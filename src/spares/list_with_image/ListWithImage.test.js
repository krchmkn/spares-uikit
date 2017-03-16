import React from 'react';
import ReactDOM from 'react-dom';
import ListWithImage from './ListWithImage';

const div = document.createElement('div');

it('renders <ListWithImage /> without crashing', () => {
  ReactDOM.render(<ListWithImage items={[]} />, div);
});
