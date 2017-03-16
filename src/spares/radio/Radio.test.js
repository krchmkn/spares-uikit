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
          }} />
      , div);;

  it('renders <Radio /> without crashing', () => {
    expect(radio).toBeTruthy();
  });

  it('renders <Radio items={[]} />', () => {
    expect(radio.props.items).toBeTruthy();
  });

  it('renders <Radio template={[]} />', () => {
    expect(radio.props.template).toBeTruthy();
  });

  it('renders <Radio /> template.name', () => {
    expect(radio.props.template.name).toBeTruthy();
  });

  it('renders <Radio /> template.name', () => {
    expect(radio.props.template.keysInItems).toBeTruthy();
  });

});
