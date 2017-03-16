import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './InputField';

describe('<InputField />', () => {
  const div = document.createElement('div');
  const input = ReactDOM.render(<InputField label="Input field"
                                              name="name"
                                              placeholder="input digits"
                                              pattern={/^\d+$/}
                                              message="Only digits"/>, div);

  it('renders <InputField /> without crashing', () => {
    expect(input).toBeTruthy();
  });

  it('renders <InputField label="" />', () => {
    expect(input.props.label).toBeTruthy();
  });

  it('renders <InputField name="" />', () => {
    expect(input.props.name).toBeTruthy();
  });

  it('renders <InputField ="" />', () => {
    expect(input.props.placeholder).toBeTruthy();
  });

  it('renders <InputField ="" />', () => {
    expect(input.props.pattern).toBeTruthy();
  });

  it('renders <InputField ="" />', () => {
    expect(input.props.message).toBeTruthy();
  });

});
