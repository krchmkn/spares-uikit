import React from 'react';
import ReactDOM from 'react-dom';
import SelectField from './SelectField';

it('renders <SelectField /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SelectField label="Select"
                name="select_name"
                onchange={function() {}}
                items={[
                  {value: 'value1', text: 'value 1'},
                  {value: 2, text: 2},
                  {value: 'value3', text: 'value 3'}
                ]} />
  , div);
});
