import React from 'react';
import ReactDOM from 'react-dom';
import ListWithImage from './ListWithImage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListWithImage />, div);
});