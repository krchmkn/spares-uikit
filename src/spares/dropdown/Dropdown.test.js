import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown';

describe('<Dropdown />', () => {
  const div = document.createElement('div');
  const dropdown = ReactDOM.render(<Dropdown items={[]}>
                      <button>open</button>
                    </Dropdown>, div);

  it('renders <Dropdown /> without crashing', () => {
      expect(dropdown).toBeTruthy();
  });

  it('renders <Dropdown /> with chiildren without crashing', () => {
    expect(dropdown.props.children.type).toBe('button');
  });

});
