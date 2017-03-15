import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox';

it('renders <Checkbox /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Checkbox items={[]}
        template={{
          name: 'test',
          keysInItems: {
            value: 'name',
            text: 'address'
          }
        }} />
    , div);
});
