import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';

it('renders <Nav /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Nav items={[]}/>, div);
});
