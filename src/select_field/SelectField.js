/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './SelectField.css';

class SelectField extends Component {
  checkAppearance() {
    let property = 'appearance';
    if (property
            || ('-webkit-' + property)
            || ('-moz-' + property)
            || ('-ms-' + property) in document.body.style) {
        return true;
    } else {
        return false;
    }
  }

  render() {
    let inputProps = {
      className: 'spares-select',
      name: this.props.name || '',
      onChange: this.props.onchange
    };

    let spares_custom_select = null;
    if (this.checkAppearance()) {
      spares_custom_select = 'spares_custom_select';
    }

    return (
        <div className="spares-select-block">
          <label className="spares-select-label">{this.props.label}</label>
          <label className={spares_custom_select}>
            <select {...inputProps}>
              {this.props.items.map((item, index) =>
                <option key={index} value={item.value}>{item.text}</option>
              )}
            </select>
          </label>
        </div>
    );
  }
}

SelectField.propTypes = {
  items: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      value: React.PropTypes.any.isRequired,
      text: React.PropTypes.any.isRequired
    })
  ),
  label: React.PropTypes.string.isRequired,
  onchange: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired
}

export default SelectField;
