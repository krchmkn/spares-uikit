import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from './Toggle';

describe('<Toggle />', () => {
  const div = document.createElement('div');
  const checkbox = ReactDOM.render(
      <Toggle items={[]}
          template={{
            name: 'test',
            keysInItems: {
              value: 'name',
              text: 'address'
            }
          }} />
      , div);;

  it('renders <Toggle /> without crashing', () => {
    expect(checkbox).toBeTruthy();
  });

  it('renders <Toggle items={[]} />', () => {
    expect(checkbox.props.items).toBeTruthy();
  });

  it('renders <Toggle template={[]} />', () => {
    expect(checkbox.props.template).toBeTruthy();
  });

  it('renders <Toggle /> template.name', () => {
    expect(checkbox.props.template.name).toBeTruthy();
  });

  it('renders <Toggle /> template.name', () => {
    expect(checkbox.props.template.keysInItems).toBeTruthy();
  });

});
