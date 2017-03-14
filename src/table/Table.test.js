import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

it('renders <Table /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Table head={[]} body={{items: [], template: []}} total={[]}/>, div);
});
