import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';

describe('<Map />', () => {
  const div = document.createElement('div');
  const map = ReactDOM.render(<Map whenMounted={function () {}}/>, div);

  it('renders <Map /> without crashing', () => {
    expect(map).toBeTruthy();
  });

  it('<Map whenMounted={} />', () => {
    expect(typeof map.props.whenMounted).toBe('function');
  });

});
