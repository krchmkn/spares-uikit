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
import Modal from './modal/Modal';
import Nav from './nav/Nav';
import Table from './table/Table';


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

const tableItems = [
  {
    client_unique:null,
    client_clicks:19553,
    client_visit:2562,
    order_count:73,
    wait_count:42,
    cancel_count:29,
    accepted_count:2,
    order_debug_count:0,
    accepted_seller_commission:1400.00,
    accepted_partner_profit:1200.00,
    accepted_system_profit:200.00,
    wait_seller_commission:33820.00,
    wait_partner_profit:29600.00,
    wait_system_profit:4220.00,
    cancel_seller_commission:23080.00,
    cancel_partner_profit:20200.00,
    cancel_system_profit:2880.00,
    max_date_group:1481625525,
    group_name:'13-12-2016',
    conversion:0.3724,
    partner_profit_from_unique_client:0.061218,
    approve:2.7397,
    wait:57.5342
  },
  {
    client_unique:19602,
    client_clicks:19553,
    client_visit:2562,
    order_count:73,
    wait_count:42,
    cancel_count:29,
    accepted_count:2,
    order_debug_count:0,
    accepted_seller_commission:1400.00,
    accepted_partner_profit:1200.00,
    accepted_system_profit:200.00,
    wait_seller_commission:33820.00,
    wait_partner_profit:29600.00,
    wait_system_profit:4220.00,
    cancel_seller_commission:23080.00,
    cancel_partner_profit:20200.00,
    cancel_system_profit:2880.00,
    max_date_group:1481625525,
    group_name:'13-12-2016',
    conversion:0.3724,
    partner_profit_from_unique_client:0.061218,
    approve:2.7397,
    wait:57.5342
  }
]

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
      <Header medium>Buttons with icons</Header>
    </Block>
    <Block>
      <Button>Button</Button>
      <Button icon="edit">Edit</Button>
      <Button icon="refresh">Refresh</Button>
      <Button icon="menu">Menu</Button>
      <Button icon="dropdown" color="primary">Dropdown</Button>
      <Button icon="remove" color="danger">Remove</Button>
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
          <Button icon="dropdown">Click me</Button>
      </Dropdown>

      <Dropdown items={[
        {text: 'item 1', onclick: testFunc.bind(null, 'item 1')},
        {text: 'item 2', onclick: testFunc.bind(null, 'item 2')},
        {text: 'item 3', onclick: testFunc.bind(null, 'item 3')}]}>
          <Button icon="dropdown">Click me</Button>
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

    <Block>
      <Header medium>Modal</Header>
    </Block>
    <Block>
      <Modal header="Modal" buttonText="openModal">
        <div>
          <p>Modal</p>
        </div>
      </Modal>
    </Block>

    <hr />

    <Block>
      <Header medium>Nav</Header>
    </Block>
    <Block>
      <Nav items={[
        {text: 'page 1', submenu: [
          {link: '/subpage', text: 'subpage'},
          {link: '/subpage', text: 'subpage'},
          {link: '/subpage', text: 'subpage'},
          {link: '/subpage', text: 'subpage'}
        ]},
        {text: 'page 2', submenu: [
          {link: '/subpage', text: 'subpage'},
          {link: '/subpage', text: 'subpage'}
        ]},
        {link: '/page', text: 'page 3'},
        {link: '/page', text: 'page 4'},
        {link: '/page', text: 'page 5'},
        {link: '/page', text: 'page 6'}
      ]}/>
    </Block>

    <hr />


    <Block>
      <Header medium>Table</Header>
    </Block>
    <Block>
      <Table head={[
              [
                [''], ['Traffic'], ['Indicators'], ['Conversion'], ['Finance']
              ],
              [
                ['Date'],
                ['Clicks', 'Unique clicks', 'Conversion'],
                ['ECPC', 'Approve', 'Waiting', 'Orders'],
                ['Waiting', 'Accepted', 'Canceled', 'Trash'],
                ['Enrolled', 'Pending', 'Rejected']
              ]
            ]}
            body={{
              items: tableItems,
              template: [
                ['group_name'],
                ['client_clicks', 'client_unique', 'conversion'],
                ['partner_profit_from_unique_client', 'approve', 'wait_count', 'order_count'],
                ['wait', 'accepted_count', 'cancel_count', 'order_debug_count'],
                ['accepted_count', 'cancel_count', 'order_debug_count']
              ]
            }}
            total={[
              ['Total:'],
              ['client_clicks', 'client_unique', 'conversion'],
              ['partner_profit_from_unique_client', 'approve', 'wait_count', 'order_count'],
              ['wait', 'accepted_count', 'cancel_count', 'order_debug_count'],
              ['accepted_count', 'cancel_count', 'order_debug_count']
            ]} />
    </Block>

    <hr />

  </div>,
  document.getElementById('root')
);
