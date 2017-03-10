/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './InputField.css';

class InputField extends Component {
  render() {

    let inputProps = {
      className: 'spares-input',
      type: 'text',
      name: this.props.name || '',
      placeholder: this.props.placeholder || '',
      onChange: this.props.onchange
    };

    return (
        <div className="spares-input-block">
          <label className="spares-input-label">{this.props.label}</label>
          <input {...inputProps} />
          <div className="spares-input-error">error</div>
        </div>
    );
  }
}

InputField.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  onchange: React.PropTypes.func.isRequired
}

export default InputField;
