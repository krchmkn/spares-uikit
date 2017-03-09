import React from 'react';
import ReactDOM from 'react-dom';

import Block from './block/Block';
import Button from './button/Button';
import Header from './header/Header';
import List from './list/List';

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
      <Header>h1 header &lt;Header /&gt;</Header>
      <Header medium>h2 header &lt;Header medium /&gt;</Header>
      <Header small>h3 header &lt;Header small /&gt;</Header>
    </Block>

    <Block>
      <Header medium>Lists</Header>
    </Block>
    <Block>
      <Header small>List 1</Header>
      <List items={listItems} template={[
        {
          label: 'name',
          key: 'name'
        }, {
          label: 'description',
          key: 'description'
        }, {
          label: 'address',
          key: 'address'
        }
      ]}/>
    </Block>

  </div>,
  document.getElementById('root')
);
