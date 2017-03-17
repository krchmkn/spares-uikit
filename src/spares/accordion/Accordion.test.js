import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';

describe('<Accordion />', () => {
  const div = document.createElement('div');
  const accordion = ReactDOM.render(
    <Accordion items={[]}
                template={{
                  header: 'name',
                  body: 'description'
                }}
                icons={{
                  open: 'icon ion-ios-plus-outline',
                  close: 'icon ion-ios-minus-outline'
                }} />
    , div);

  it('renders <Accordion /> without crashing', () => {
    expect(accordion).toBeTruthy();
  });

  it('Accordion items', () => {
    expect(accordion.props.items).toBeTruthy();
  });

  it('Accordion template', () => {
    expect(accordion.props.template).toBeTruthy();
  });

  it('Accordion template.header', () => {
    expect(accordion.props.template.header).toBeTruthy();
  });

  it('Accordion template.body', () => {
    expect(accordion.props.template.body).toBeTruthy();
  });

  it('Accordion icons', () => {
    expect(accordion.props.icons).toBeTruthy();
  });

  it('Accordion icons.open', () => {
    expect(accordion.props.icons.open).toBeTruthy();
  });

  it('Accordion icons.close', () => {
    expect(accordion.props.icons.close).toBeTruthy();
  });

});
