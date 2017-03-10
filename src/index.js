import React from 'react';
import ReactDOM from 'react-dom';

import Block from './block/Block';
import Button from './button/Button';
import Header from './header/Header';
import List from './list/List';
import ListWithImage from './list_with_image/ListWithImage';
import Paragraph from './paragraph/Paragraph';


/*
* TODO
* panel for list
* input
* textarea
* select
* checkbox
* radio
* tabs buttons
* icon button
* card
* table
* datepicker
* chart
* wrap block
*/

const listItems = [
  {
    name: 'Item1',
    description: 'Lorem ipsum1',
    address: 'address1'
  },
  {
    name: 'Item1',
    description: 'Lorem ipsum1',
    address: 'address1'
  }
];

const listWithImageItems = [
  {
    name: 'Item1',
    pageLink: '/pagelink',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-oAsmlxhKCDMkkz74yzGnBGl41cF1LVQmVVPseCRbmzu3kC2',
    description: 'Lorem ipsum1',
    label1: 'text1',
    label2: 'text2'
  },
  {
    name: 'Item2',
    pageLink: '/pagelink',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-oAsmlxhKCDMkkz74yzGnBGl41cF1LVQmVVPseCRbmzu3kC2',
    description: 'Lorem ipsum2',
    label1: 'text3',
    label2: 'text4'
  }
];

ReactDOM.render(
  <div>
    <Block>
      <Header>Spares uikit</Header>
    </Block>

    <Block>
      <Block>I'm a block</Block>
      <Block flex>
        <div>I'm a </div>
        <div>flex</div>
        <div>block</div>
      </Block>
    </Block>

    <Block>
      <Header medium>Buttons</Header>
    </Block>
    <Block>
      <Button>Click me</Button>
      <Button color="primary">Click me</Button>
      <Button color="danger">Click me</Button>
    </Block>

    <Block>
      <Header medium>Disabled buttons</Header>
    </Block>
    <Block>
      <Button disabled>Click me</Button>
      <Button color="primary" disabled>Click me</Button>
      <Button color="danger" disabled>Click me</Button>
    </Block>

    <Block>
      <Header medium>Headers</Header>
    </Block>
    <Block>
      <Header>h1 header</Header>
      <Header medium>h2 header</Header>
      <Header small>h3 header</Header>
    </Block>

    <Block>
      <Header medium>Paragraph</Header>
    </Block>
    <Block>
        <Paragraph>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua
        </Paragraph>
    </Block>

    <Block>
      <Header medium>Lists</Header>
    </Block>
    <Block>
      <Header small>List 1</Header>
      <List items={listItems} template={[
        [ {label: 'name', key: 'name'}, {label: 'name1', key: 'name'} ],
        [ {label: 'description', key: 'description'} ],
        [ {label: 'address', key: 'address'} ]
      ]}/>
    </Block>

    <Block>
      <Header small>List with image</Header>
      <ListWithImage items={listWithImageItems} template={{
        header: 'name',
        pageLink: 'pagelink',
        image: 'image',
        description: 'description',
        labels: [
          {label: 'first line', key: 'label1'},
          {label: 'second line', key: 'label2'},
          {label: 'first line1', key: 'label1'},
          {label: 'second line2', key: 'label2'}
        ]
      }}/>
    </Block>

  </div>,
  document.getElementById('root')
);
