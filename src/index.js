/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React from 'react';
import ReactDOM from 'react-dom';

import { Block, Button, Header, List,
        ListWithImage, Paragraph, ButtonsTwins,
        InputField, TextField, SelectField,
        Radio, Checkbox, Dropdown,
        Card, Modal, Nav, Table,
        Search, Accordion, Map, Toggle } from '../spares';

import './index.css';
import logo from '../logo/spares-uikit-logo.svg';

const listItems = [{
    id: 1,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  }, {
    id: 2,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
}];

const listWithImageItems = [{
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    pageLink: '/pagelink',
    image: 'https://cdn.worldvectorlogo.com/logos/react.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    label1: 'text1',
    label2: 'text2'
  }, {
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    pageLink: '/pagelink',
    image: 'https://cdn.worldvectorlogo.com/logos/react.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    label1: 'text3',
    label2: 'text4'
}];

const tableItems = [{
    'client_unique':null,
    'client_clicks': 1000,
    'client_visit':2562,
    'order_count':73,
    'wait_count':42,
    'cancel_count':29,
    'accepted_count':2,
    'order_debug_count':0,
    'accepted_seller_commission':1400.00,
    'accepted_partner_profit':1200.00,
    'accepted_system_profit':200.00,
    'wait_seller_commission':33820.00,
    'wait_partner_profit':29600.00,
    'wait_system_profit':4220.00,
    'cancel_seller_commission':23080.00,
    'cancel_partner_profit':20200.00,
    'cancel_system_profit':2880.00,
    'max_date_group':1481625525,
    'group_name':'13-12-2016',
    'conversion':0.3724,
    'partner_profit_from_unique_client':0.061218,
    'approve':2.7397,
    'wait':57.5342
  }, {
    'client_unique':null,
    'client_clicks': 3000,
    'client_visit':3562,
    'order_count':83,
    'wait_count':52,
    'cancel_count':39,
    'accepted_count':6,
    'order_debug_count':3,
    'accepted_seller_commission':2400.00,
    'accepted_partner_profit':2200.00,
    'accepted_system_profit':400.00,
    'wait_seller_commission':53820.00,
    'wait_partner_profit':79600.00,
    'wait_system_profit':8220.00,
    'cancel_seller_commission':12080.00,
    'cancel_partner_profit':40200.00,
    'cancel_system_profit':4880.00,
    'max_date_group':625525,
    'group_name':'13-12-2016',
    'conversion':1.3724,
    'partner_profit_from_unique_client':1.061218,
    'approve':4.7397,
    'wait':67.5342
}, {
  'client_unique':null,
  'client_clicks': 2000,
  'client_visit':3562,
  'order_count':83,
  'wait_count':52,
  'cancel_count':39,
  'accepted_count':6,
  'order_debug_count':3,
  'accepted_seller_commission':2400.00,
  'accepted_partner_profit':2200.00,
  'accepted_system_profit':400.00,
  'wait_seller_commission':53820.00,
  'wait_partner_profit':79600.00,
  'wait_system_profit':8220.00,
  'cancel_seller_commission':12080.00,
  'cancel_partner_profit':40200.00,
  'cancel_system_profit':4880.00,
  'max_date_group':625525,
  'group_name':'13-12-2016',
  'conversion':1.3724,
  'partner_profit_from_unique_client':1.061218,
  'approve':4.7397,
  'wait':67.5342
}];

const submitFunc = function(event) {
  let inputs = event.target.querySelectorAll('[data-valid]');
  let form_valid = false;

  for (let el of inputs) {
    form_valid = (el.getAttribute('data-valid') === 'true');

    if (form_valid === false) {
      break;
    }
  }

  if (form_valid) {
    alert('Form submited');
  }
  event.preventDefault();
};

ReactDOM.render(
  <div>

    <a href="#pageHeader" className="spares-demo-to-menu"
    title="to menu">
      <i className="icon ion-arrow-up-a"></i>Menu
    </a>

    <div id="pageHeader">
      <Block>
        <img src={logo} alt="spares-uikit" className="spares-demo-logo" />

        <Nav items={[
          {link: '#Blocks', text: 'Blocks'},
          {link: '#Typography', text: 'Typography'},
          {link: '#Card', text: 'Card'},
          {link: '#Buttons', text: 'Buttons'},
          {link: '#InputField', text: 'InputField'},
          {link: '#SelectField', text: 'SelectField'},
          {link: '#TextField', text: 'TextField'},
          {link: '#Checkbox', text: 'Checkbox'},
          {link: '#Radio', text: 'Radio'},
          {link: '#Dropdown', text: 'Dropdown'},
          {link: '#List', text: 'List'},
          {link: '#ListWithImage', text: 'ListWithImage'},
          {link: '#Modal', text: 'Modal'},
          {link: '#Nav', text: 'Nav'},
          {link: '#Table', text: 'Table'},
          {link: '#Search', text: 'Search'},
          {link: '#Accordion', text: 'Accordion'},
          {link: '#Form', text: 'Form'},
          {link: '#Map', text: 'Map'},
          {link: '#Toggle', text: 'Toggle'}
        ]} />
      </Block>
    </div>

    <div id="Blocks">
      <Block>
        <Header>Blocks</Header>
      </Block>

      <Block>
        <Header small>Block</Header>
      </Block>
      <Block>
        <p>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua</p></Block>

      <Block>
        <Header small>Block flex</Header>
      </Block>
      <Block flex>
        <Paragraph>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua</Paragraph>
        <Paragraph>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua</Paragraph>
        <Paragraph> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua</Paragraph>
      </Block>
    </div>


    <div id="Typography">
      <Block>
          <Header>Typography</Header>

          <Header>H1 header</Header>
          <Header center>H1 header, text align center</Header>
          <Header medium>H2 header</Header>
          <Header small>H3 header</Header>
          <Paragraph>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua
          </Paragraph>
      </Block>
    </div>


    <div id="Card">
      <Block>
        <Header>Card</Header>
      </Block>
      <Block>
        <Card>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua
        </Card>
      </Block>
    </div>


    <div id="Buttons">
      <Block>
        <Header>Buttons</Header>
      </Block>
      <Block>
        <Button onclick={() => alert('Spares-uikit')}>Click me</Button>
        <Button submit>Submit button</Button>
        <Button color="primary">Primary button</Button>
        <Button color="danger">Danger button</Button>

        <Header small>Button with icon</Header>
        <Button icon="icon ion-loop" color="primary">Refresh</Button>

        <Header small>Button disabled</Header>
        <Button disabled>I'm disabled</Button>
        <Button color="primary" disabled>I'm disabled</Button>
        <Button color="danger" disabled>I'm disabled</Button>

        <Header small>ButtonsTwins</Header>
        <ButtonsTwins items={[
          {
            text: 'Button1',
            onclick: () => alert('Spares-uikit: Button1')
          }, {
            text: 'Button2',
            onclick: () => alert('Spares-uikit: Button2')
          }
        ]}/>
      </Block>
    </div>


    <div id="InputField">
      <Block>
        <Header>InputField</Header>
      </Block>
      <Block>
        <InputField
              label="Input digits"
              name="name"
              placeholder="I'm placeholder"
              pattern={/^\d+$/}
              message="Only digits" />
      </Block>
    </div>


    <div id="SelectField">
      <Block>
        <Header>SelectField</Header>
      </Block>
      <Block>
        <SelectField
            label="Select"
            name="select_name"
            onchange={() => alert('Spares-uikit: SelectField')}
            items={[
              {value: 'value1', text: 'value 1'},
              {value: 2, text: 2},
              {value: 'value3', text: 'value 3'}
            ]} />
      </Block>
    </div>


    <div id="TextField">
      <Block>
        <Header>TextField</Header>
      </Block>
      <Block>
        <TextField
            label="Enter text"
            name="name"
            placeholder="Enter 150 characters"
            char_count={150}
            message="Enter 150 characters" />
      </Block>
    </div>


    <div id="Checkbox">
      <Block>
        <Header>Checkbox</Header>
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
    </div>


    <div id="Radio">
      <Block>
        <Header>Radio</Header>
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
    </div>


    <div id="Dropdown">
      <Block>
        <Header>Dropdown</Header>
      </Block>
      <Block>
        <Dropdown items={[
          {text: 'item 1', onclick: () => alert('Spares-uikit: 1')},
          {text: 'item 2', onclick: () => alert('Spares-uikit: 2')},
          {text: 'item 3', onclick: () => alert('Spares-uikit: 3')}]}>
            <Button icon="icon ion-android-arrow-dropdown">Click me</Button>
        </Dropdown>
      </Block>
    </div>


    <div id="List">
      <Block>
        <Header>List</Header>
      </Block>
      <Block>
        <List items={listItems} template={[
          [
            {label: 'name', key: 'name', icon: 'icon ion-ios-person-outline'},
            {label: 'name1', key: 'name', icon: 'icon ion-ios-person-outline'}
          ],
          [ {label: 'description', key: 'description', icon: 'icon ion-android-list'} ],
          [ {label: 'address', key: 'address', icon: 'icon ion-ios-location'} ]
        ]}/>
      </Block>
    </div>


    <div id="ListWithImage">
      <Block>
        <Header>ListWithImage</Header>
      </Block>
      <Block>
          <ListWithImage items={listWithImageItems} template={{
            header: 'name',
            pageLink: 'pagelink',
            image: 'image',
            description: 'description',
            labels: [
              {label: 'first line', key: 'label1', icon: 'icon ion-ios-person-outline'},
              {label: 'second line', key: 'label2', icon: 'icon ion-android-list'},
              {label: 'first line1', key: 'label1', icon: 'icon ion-ios-location'},
              {label: 'second line2', key: 'label2', icon: 'icon ion-ios-person-outline'}
            ]
          }}/>
      </Block>
    </div>


    <div id="Modal">
      <Block>
        <Header>Modal</Header>
      </Block>
      <Block>
          <Modal header="Modal"
                  buttonText="Оpen мodal"
                  closeIcon="icon ion-close">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </Modal>
      </Block>
    </div>


    <div id="Nav">
      <Block>
        <Header>Nav</Header>
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
        ]}
        dropdownIcon="icon ion-android-arrow-dropdown"/>
      </Block>
    </div>


    <div id="Table">
      <Block>
        <Header>Table</Header>
      </Block>
      <Block>
          <Table head={[
                  [
                    [{text: ''}],
                    [{text: 'Traffic'}],
                    [{text: 'Indicators'}],
                    [{text: 'Conversion'}],
                    [{text: 'Finance'}]
                  ],
                  [
                    [{text: 'Date'}],
                    [
                      {text: 'Clicks', sort: 'client_clicks'},
                      {text: 'Unique clicks', sort: 'client_unique'},
                      {text: 'Conversion', sort: 'conversion'}
                    ],
                    [
                      {text: 'ECPC', sort: 'partner_profit_from_unique_client'},
                      {text: 'Approve', sort: 'approve'},
                      {text: 'Waiting', sort: 'wait_count'},
                      {text: 'Orders', sort: 'order_count'}
                    ],
                    [
                      {text: 'Waiting', sort: 'wait'},
                      {text: 'Accepted', sort: 'accepted_count'},
                      {text: 'Canceled', sort: 'cancel_count'},
                      {text: 'Trash', sort: 'order_debug_count'}
                    ],
                    [
                      {text: 'Enrolled', sort: 'accepted_count'},
                      {text: 'Pending', sort: 'cancel_count'},
                      {text: 'Rejected', sort: 'order_debug_count'}
                    ]
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
    </div>


    <div id="Search">
      <Block>
        <Header>Search</Header>
      </Block>
      <Block>
        <form onSubmit={() => alert('Search submit')}>
          <Search placeholder="Search"
                  buttonIcon="icon ion-search" />
        </form>
      </Block>
    </div>


    <div id="Accordion">
      <Block>
        <Header>Accordion</Header>
      </Block>
      <Block>

        <Accordion items={listItems}
                    template={{
                      header: 'name',
                      body: 'description'
                    }}
                    icons={{
                      open: 'icon ion-ios-minus-outline',
                      close: 'icon ion-ios-plus-outline'
                    }} />

      </Block>
    </div>


    <div id="Form">
      <form onSubmit={submitFunc}>
        <Block>
          <Header>Form</Header>
        </Block>
        <Block>
          <InputField
                label="Input field"
                name="name"
                placeholder="input digits"
                pattern={/^\d+$/}
                message="Only digits" />
        </Block>
        <Block>
          <TextField
              label="Enter text"
              name="name"
              placeholder="Enter 10 characters"
              char_count={10}
              message="Enter 10 characters" />
        </Block>
        <Block>
          <Button submit>Submit</Button>
        </Block>
      </form>
    </div>

    <div id="Map">
      <Block>
        <Header>Map</Header>
      </Block>
      <Block>
        <Map whenMounted={window.getMap}>address</Map>
      </Block>
    </div>

    <div id="Toggle">
      <Block>
        <Header>Toggle</Header>
      </Block>
      <Block>
        <Toggle items={listItems}
              template={{
                name: 'checkbox',
                keysInItems: {
                  value: 'name',
                  text: 'address'
                }
              }} />
      </Block>
    </div>

  </div>,
  document.getElementById('root')
);
