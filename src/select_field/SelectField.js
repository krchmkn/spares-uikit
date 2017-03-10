/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './SelectField.css';

class SelectField extends Component {

  checkItems(items) {
    let message = `Spares uikit: <Select /> component property items
    should be an array of objects. Object should have keys 'text' and 'value;'
    Example:
    [
      {value: 'value1', text: 'value 1'},
      {value: 2, text: 2}
    ];\n`;

    if (typeof items !== 'object'
        || items.length == null
        || items.length <= 0) {
      throw new Error(message);
    } else {
      for (let item of items) {
        if (typeof item !== 'object') {
          throw new Error(message);
        }
      }
    }

  }

  render() {
    let inputProps = {
      className: 'spares-select',
      name: this.props.name || '',
      onChange: this.props.onchange
    };

    this.checkItems(this.props.items);

    return (
        <div className="spares-select-block">
          <label className="spares-select-label">{this.props.label}</label>
          <select {...inputProps}>
            {this.props.items.map((item, index) =>
              <option key={index} value={item.value}>{item.text}</option>
            )}
          </select>
        </div>
    );
  }
}

SelectField.propTypes = {
  items: React.PropTypes.array.isRequired,
  label: React.PropTypes.string.isRequired,
  onchange: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired
}

export default SelectField;
