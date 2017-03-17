import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';

describe('<Search />', () => {
  const div = document.createElement('div');
  const search = ReactDOM.render(
    <Search placeholder="Search"
            buttonIcon="icon ion-search" />, div);

  it('renders <Search /> without crashing', () => {
    expect(search).toBeTruthy();
  });

  it('Search placeholder', () => {
    expect(search.props.placeholder).toBeTruthy();
  });

  it('Search buttonIcon', () => {
    expect(search.props.buttonIcon).toBeTruthy();
  });

});
