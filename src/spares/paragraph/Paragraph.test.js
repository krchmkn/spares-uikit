import React from 'react';
import ReactDOM from 'react-dom';
import Paragraph from './Paragraph';

const div = document.createElement('div');

it('renders <Paragraph /> without crashing', () => {
  ReactDOM.render(<Paragraph />, div);
});
