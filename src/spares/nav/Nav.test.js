import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';

describe('<Nav />', () => {
  const div = document.createElement('div');
  const nav = ReactDOM.render(<Nav items={[]} dropdownIcon="class"/>, div);

  it('renders <Nav /> without crashing', () => {
    expect(nav).toBeTruthy();
  });

  it('Nav dropdownIcon', () => {
    expect(nav.props.dropdownIcon).toBeTruthy();
  });

});
