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
          }}
          onchange={(e) => console.log('Checkbox', e.target.value)} />
      , div);;

  it('renders <Checkbox /> without crashing', () => {
    expect(checkbox).toBeTruthy();
  });

  it('<Checkbox items={[]} />', () => {
    expect(checkbox.props.items).toBeTruthy();
  });

  it('<Checkbox template={[]} />', () => {
    expect(checkbox.props.template).toBeTruthy();
  });

  it('<Checkbox /> template.name', () => {
    expect(checkbox.props.template.name).toBeTruthy();
  });

  it('<Checkbox /> template.name', () => {
    expect(checkbox.props.template.keysInItems).toBeTruthy();
  });

  it('<Checkbox /> onchange', () => {
    expect(typeof checkbox.props.onchange).toBe('function');
  });

});
