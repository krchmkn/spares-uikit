import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown';

it('renders <Dropdown /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dropdown items={[]}><button>open</button></Dropdown>, div);
});
