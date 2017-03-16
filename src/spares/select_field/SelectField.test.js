import React from 'react';
import ReactDOM from 'react-dom';
import SelectField from './SelectField';

describe('<SelectField />', () => {
  const div = document.createElement('div');
  const select = ReactDOM.render(
      <SelectField label="Select"
                  name="select_name"
                  onchange={function() {}}
                  items={[
                    {value: 'value1', text: 'value 1'},
                    {value: 2, text: 2},
                    {value: 'value3', text: 'value 3'}
                  ]} />
    , div);

  it('renders <SelectField /> without crashing', () => {
    expect(select).toBeTruthy();
  });

  it('SelectField label', () => {
    expect(select.props.label).toBeTruthy();
  });

  it('SelectField name', () => {
    expect(select.props.name).toBeTruthy();
  });

  it('SelectField onchange', () => {
    expect(typeof select.props.onchange).toBe('function');
  });

  it('SelectField items', () => {
    expect(select.props.items).toBeTruthy();
  });

});
