import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from './Toggle';

describe('<Toggle />', () => {
  const div = document.createElement('div');
  const toggle = ReactDOM.render(
      <Toggle name="toggle1"
              label="toggle label 1"
              checked
              onchange={(checked) => { console.log('toggle 1', checked) }}/>
      , div);

  it('renders <Toggle /> without crashing', () => {
    expect(toggle).toBeTruthy();
  });

  it('renders <Toggle label />', () => {
    expect(toggle.props.label).toBeTruthy();
  });

  it('renders <Toggle checked />', () => {
    expect(toggle.props.checked).toBeTruthy();
  });

  it('renders <Toggle onchange />', () => {
    expect(typeof toggle.props.onchange).toBe('function');
  });

});
