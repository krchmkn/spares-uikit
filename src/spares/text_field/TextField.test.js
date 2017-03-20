import React from 'react';
import ReactDOM from 'react-dom';
import TextField from './TextField';

describe('<TextField />', () => {
  const div = document.createElement('div');
  const textarea = ReactDOM.render(
      <TextField label="Enter text"
                name="name"
                placeholder="Enter 150 characters"
                char_count={150}
                message="Enter 150 characters"
                onchange={(valid) => console.log('form InputField', valid)} />
    , div);

  it('renders <TextField /> without crashing', () => {
    expect(textarea).toBeTruthy();
  });

  it('TextField label', () => {
    expect(textarea.props.label).toBeTruthy();
  });

  it('TextField name', () => {
    expect(textarea.props.name).toBeTruthy();
  });

  it('TextField placeholder', () => {
    expect(textarea.props.placeholder).toBeTruthy();
  });

  it('TextField char_count', () => {
    expect(textarea.props.char_count).toBeTruthy();
  });

  it('TextField message', () => {
    expect(textarea.props.message).toBeTruthy();
  });

  it('<TextField /> onchange', () => {
    expect(typeof textarea.props.onchange).toBe('function');
  });

});
