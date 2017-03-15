import React from 'react';
import ReactDOM from 'react-dom';

import { Block, Button, Header, List,
        ListWithImage, Paragraph, ButtonsTwins,
        InputField, TextField, SelectField,
        Radio, Checkbox, Dropdown,
        Card, Modal, Nav, Table } from '../spares';

const listItems = [{
    id: 1,
    name: 'Item1',
    description: 'Lorem ipsum1',
    address: 'address1'
  }, {
    id: 2,
    name: 'Item2',
    description: 'Lorem ipsum2',
    address: 'address2'
}];

ReactDOM.render(
  <div>

    {/* header */}

    <Block>
      <Header>h1 header</Header>
    </Block>

    {/* button */}

    <Block>
      <Button color="primary">Click me</Button>
    </Block>

  </div>,
  document.getElementById('root')
);
