import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

describe('<Modal />', () => {
  const div = document.createElement('div');
  const modal = ReactDOM.render(<Modal header="Modal"
                          buttonText="openModal"
                          closeIcon="class"  />, div);

  it('renders <Modal /> without crashing', () => {
    expect(modal).toBeTruthy();
  });

  it('Modal header', () => {
    expect(modal.props.header).toBeTruthy();
  });

  it('Modal buttonText', () => {
    expect(modal.props.buttonText).toBeTruthy();
  });

  it('Modal closeIcon', () => {
    expect(modal.props.closeIcon).toBeTruthy();
  });

});
