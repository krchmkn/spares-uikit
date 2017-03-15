import React from 'react';
import ReactDOM from 'react-dom';
import Paragraph from './Paragraph';

it('renders <Paragraph /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Paragraph />, div);
});
