import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

describe('<Table />', () => {
  const div = document.createElement('div');
  const table = ReactDOM.render(<Table head={[]} body={{items: [], template: []}} total={[]}/>, div);

  it('renders <Table /> without crashing', () => {
    expect(table).toBeTruthy();
  });

  it('Table head', () => {
    expect(table.props.head).toBeTruthy();
  });

  it('Table body', () => {
    expect(table.props.body).toBeTruthy();
  });

  it('Table body.items', () => {
    expect(table.props.body.items).toBeTruthy();
  });

  it('Table body.template', () => {
    expect(table.props.body.template).toBeTruthy();
  });

  it('Table total', () => {
    expect(table.props.total).toBeTruthy();
  });


});
