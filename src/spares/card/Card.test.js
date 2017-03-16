import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

const div = document.createElement('div');

it('renders <Card /> without crashing', () => {
  ReactDOM.render(<Card />, div);
});
