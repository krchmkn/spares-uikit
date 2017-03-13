import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

it('renders <Modal /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Modal header="Modal" buttonText="openModal" />, div);
});
