import React from 'react';
import ReactDOM from 'react-dom';
import ButtonsTwins from './ButtonsTwins';

const div = document.createElement('div');

it('renders <ButtonsTwins /> without crashing', () => {
  ReactDOM.render(<ButtonsTwins items={[]} />, div);
});
