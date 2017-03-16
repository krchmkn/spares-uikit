import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  const div = document.createElement('div');
  const checkbox = ReactDOM.render(
      <Checkbox items={[]}
          template={{
            name: 'test',
            keysInItems: {
              value: 'name',
              text: 'address'
            }
          }} />
      , div);;

  it('renders <Checkbox /> without crashing', () => {
    expect(checkbox).toBeTruthy();
  });

  it('renders <Checkbox items={[]} />', () => {
    expect(checkbox.props.items).toBeTruthy();
  });

  it('renders <Checkbox template={[]} />', () => {
    expect(checkbox.props.template).toBeTruthy();
  });

  it('renders <Checkbox /> template.name', () => {
    expect(checkbox.props.template.name).toBeTruthy();
  });

  it('renders <Checkbox /> template.name', () => {
    expect(checkbox.props.template.keysInItems).toBeTruthy();
  });

});
