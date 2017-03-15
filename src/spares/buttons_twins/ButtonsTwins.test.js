import React from 'react';
import ReactDOM from 'react-dom';
import ButtonsTwins from './ButtonsTwins';

it('renders <ButtonsTwins /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonsTwins items={[]}/>, div);
});
