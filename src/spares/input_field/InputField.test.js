import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './InputField';

describe('<InputField />', () => {
  const div = document.createElement('div');
  const input = ReactDOM.render(
    <InputField label="Input field"
                name="name"
                placeholder="input digits"
                pattern={/^\d+$/}
                message="Only digits"
                onchange={(valid) => console.log('form InputField', valid)} />
  , div);

  it('renders <InputField /> without crashing', () => {
    expect(input).toBeTruthy();
  });

  it('<InputField label="" />', () => {
    expect(input.props.label).toBeTruthy();
  });

  it('<InputField name="" />', () => {
    expect(input.props.name).toBeTruthy();
  });

  it('<InputField ="" />', () => {
    expect(input.props.placeholder).toBeTruthy();
  });

  it('<InputField ="" />', () => {
    expect(input.props.pattern).toBeTruthy();
  });

  it('<InputField ="" />', () => {
    expect(input.props.message).toBeTruthy();
  });

  it('<InputField /> onchange', () => {
    expect(typeof input.props.onchange).toBe('function');
  });


});
