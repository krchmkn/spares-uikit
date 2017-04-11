/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      text: PropTypes.any.isRequired
    })
  ),
  label: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default SelectField;
