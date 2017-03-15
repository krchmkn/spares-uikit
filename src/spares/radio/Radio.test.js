import React from 'react';
import ReactDOM from 'react-dom';
import Radio from './Radio';

it('renders <Radio /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Radio items={[]}
          template={{
            name: 'test',
            keysInItems: {
              value: 'name',
              text: 'address'
            }
          }} />
  , div);
});
