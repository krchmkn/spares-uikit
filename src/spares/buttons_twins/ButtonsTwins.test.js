import React from 'react';
import ReactDOM from 'react-dom';
import ButtonsTwins from './ButtonsTwins';

describe('<ButtonsTwins />', () => {
  const div = document.createElement('div');

  it('renders without crashing', () => {
    ReactDOM.render(<ButtonsTwins items={[{
                                    text: 'Button1',
                                    onclick: () => {  }
                                  }]} />, div);
  });

});
