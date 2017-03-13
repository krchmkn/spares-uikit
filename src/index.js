import React from 'react';
import ReactDOM from 'react-dom';

import Block from './block/Block';
import Button from './button/Button';
import Header from './header/Header';
import List from './list/List';
import ListWithImage from './list_with_image/ListWithImage';
import Paragraph from './paragraph/Paragraph';
import ButtonsTwins from './buttons_twins/ButtonsTwins';
import InputField from './input_field/InputField';
import TextField from './text_field/TextField';
import SelectField from './select_field/SelectField';
import Radio from './radio/Radio';
import Checkbox from './checkbox/Checkbox';
import Dropdown from './dropdown/Dropdown';
import Card from './card/Card';

const listItems = [
  {
    id: 1,
    name: 'Item1',
    description: 'Lorem ipsum1',
    address: 'address1'
  },
  {
    id: 2,
    name: 'Item2',
    description: 'Lorem ipsum2',
    address: 'address2'
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

const testFunc = function (name) {
  console.log(name);
};

ReactDOM.render(
  <div>
    <Block>
      <Header center>Spares uikit</Header>
    </Block>

    <hr />

    <Block>I'm a block</Block>
    <Block flex>
      <div>I'm a </div>
      <div>flex</div>
      <div>block</div>
    </Block>

    <hr />

    <Block>
      <Header medium>Buttons</Header>
    </Block>
    <Block>
      <Button onclick={testFunc.bind(null, 'click')}>Click me</Button>
      <Button submit>Submit button</Button>
      <Button color="primary">Click me</Button>
      <Button color="danger">Click me</Button>
    </Block>

    <hr />

    <Block>
      <Header medium>Disabled buttons</Header>
    </Block>
    <Block>
      <Button disabled>Click me</Button>
      <Button color="primary" disabled>Click me</Button>
      <Button color="danger" disabled>Click me</Button>
    </Block>

    <hr />

    <Block>
      <Header medium>Buttons twins</Header>
    </Block>
    <Block>
      <ButtonsTwins items={[
        {
          text: 'Button1',
          onclick: testFunc.bind(null, 'name1')
        }, {
          text: 'Button2',
          onclick: testFunc.bind(null, 'name2')
        }
      ]}/>
    </Block>

    <hr />

    <Block>
      <Header medium>Headers</Header>
    </Block>
    <Block>
      <Header>h1 header</Header>
      <Header center>h1 header, text align center</Header>
      <Header medium>h2 header</Header>
      <Header small>h3 header</Header>
    </Block>

    <hr />

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

    <hr />

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

    <hr />

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

    <hr />

    <Block>
      <Header medium>Input field</Header>
    </Block>
    <Block>
        <InputField
              label="Input field"
              name="name"
              placeholder="input digits"
              pattern={/^\d+$/}
              message="Only digits" />
    </Block>

    <hr />

    <Block>
      <Header medium>Text field</Header>
    </Block>
    <Block>
        <TextField
            label="Enter text"
            name="name"
            placeholder="Enter 150 characters"
            char_count={150}
            message="Enter 150 characters" />
    </Block>

    <hr />

    <Block>
      <Header medium>Select</Header>
    </Block>
    <Block>
        <SelectField
            label="Select"
            name="select_name"
            onchange={testFunc.bind(null, 'select1')}
            items={[
              {value: 'value1', text: 'value 1'},
              {value: 2, text: 2},
              {value: 'value3', text: 'value 3'}
            ]} />
    </Block>

    <hr />

    <Block>
      <Header medium>Radio buttons</Header>
    </Block>
    <Block>
        <Radio items={listItems}
              template={{
                name: 'test',
                keysInItems: {
                  value: 'name',
                  text: 'address'
                }
              }} />
    </Block>

    <hr />

    <Block>
      <Header medium>Checkbox</Header>
    </Block>
    <Block>
        <Checkbox items={listItems}
              template={{
                name: 'checkbox',
                keysInItems: {
                  value: 'name',
                  text: 'address'
                }
              }} />
    </Block>

    <hr />

    <Block>
      <Header medium>Dropdown</Header>
    </Block>
    <Block>
      <Dropdown items={[
        {text: 'item 1', onclick: testFunc.bind(null, 'item 1')},
        {text: 'item 2', onclick: testFunc.bind(null, 'item 2')},
        {text: 'item 3', onclick: testFunc.bind(null, 'item 3')}]}>
          <Button>Click me</Button>
      </Dropdown>
    </Block>

    <hr />

    <Block>
      <Header medium>Card</Header>
    </Block>
    <Block>
      <Card>card</Card>
    </Block>

    <hr />



  </div>,
  document.getElementById('root')
);
