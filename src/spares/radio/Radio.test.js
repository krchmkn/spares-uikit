import React from 'react';
import ReactDOM from 'react-dom';
import Radio from './Radio';

describe('<Radio />', () => {
  const div = document.createElement('div');
  const radio = ReactDOM.render(
    <Radio items={[]}
          template={{
            name: 'test',
            keysInItems: {
              value: 'name',
              text: 'address'
            }
          }}
          onchange={(e) => console.log('Checkbox', e.target.value)}  />
      , div);;

  it('renders <Radio /> without crashing', () => {
    expect(radio).toBeTruthy();
  });

  it('<Radio items={[]} />', () => {
    expect(radio.props.items).toBeTruthy();
  });

  it('<Radio template={[]} />', () => {
    expect(radio.props.template).toBeTruthy();
  });

  it('<Radio /> template.name', () => {
    expect(radio.props.template.name).toBeTruthy();
  });

  it('<Radio /> template.name', () => {
    expect(radio.props.template.keysInItems).toBeTruthy();
  });

  it('<Radio /> onchange', () => {
    expect(typeof radio.props.onchange).toBe('function');
  });

});
