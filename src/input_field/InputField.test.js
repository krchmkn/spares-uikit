import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './InputField';

it('renders <InputField /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <InputField label="Input field"
                name="name"
                placeholder="input digits"
                pattern={/^\d+$/}
                message="Only digits"/>
    , div);
});
