/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputField.css';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.testValue = this.testValue.bind(this);
    this.state = {valid: false};
    this.changed = false;
  };

  testValue(event) {
    this.changed = true;
    let input_value = event.target.value;

    if (typeof String.prototype.trim === 'function') {
      input_value = event.target.value.trim()
    }
    
    if (input_value.length > 0) {
      if (this.props.pattern.test(input_value)) {
        this.setState({valid: true}, () => {
          if (this.props.onchange) {
            this.props.onchange(this.state.valid);
          } 
        });
      } else {
        this.setState({valid: false}, () => {
          if (this.props.onchange) {
            this.props.onchange(this.state.valid);
          } 
        });
      }
    } else {
      this.setState({valid: false}, () => {
          if (this.props.onchange) {
            this.props.onchange(this.state.valid);
          } 
      });
    }
  };

  render() {
    let inputProps = {
      className: 'spares-input',
      type: this.props.type,
      name: this.props.name || '',
      placeholder: this.props.placeholder || '',
      onChange: this.testValue
    };

    if (!this.state.valid && this.changed) {
      inputProps.className += ' error';
    }

    return (
        <div className="spares-input-block">
          <label className="spares-input-label">{this.props.label}</label>
          <input {...inputProps} />
          {!this.state.valid && this.changed ? (<div className="spares-input-error">{this.props.message}</div>) : null}
        </div>
    );
  }
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.any.isRequired,
  message: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onchange: PropTypes.func,
  type: PropTypes.string.isRequired
}

export default InputField;
