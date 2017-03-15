import React from 'react';
import ReactDOM from 'react-dom';
import TextField from './TextField';

it('renders <TextField /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <TextField label="Enter text"
              name="name"
              placeholder="Enter 150 characters"
              char_count={150}
              message="Enter 150 characters" />
  , div);
});
