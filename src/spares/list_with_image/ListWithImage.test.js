import React from 'react';
import ReactDOM from 'react-dom';
import ListWithImage from './ListWithImage';

const div = document.createElement('div');

it('renders <ListWithImage /> without crashing', () => {
  ReactDOM.render(
      <ListWithImage items={[]} template={{
        header: 'name',
        pageLink: 'pagelink',
        image: 'image',
        description: 'description',
        labels: [
          {label: 'first line', key: 'label1', icon: 'icon ion-ios-person-outline'}
        ]
      }} />
  , div);
});
