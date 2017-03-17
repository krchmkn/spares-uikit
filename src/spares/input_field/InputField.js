/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import './InputField.css';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.testValue = this.testValue.bind(this);
    this.state = {invalid: false};
  };

  testValue(event) {
    if (event.target.value.length > 0) {
      if (this.props.pattern.test(event.target.value)) {
        this.setState({invalid: false});
      } else {
        this.setState({invalid: true});
      }
    } else {
      this.setState({invalid: false});
    }
  };

  render() {
    let inputProps = {
      className: 'spares-input',
      type: 'text',
      name: this.props.name || '',
      placeholder: this.props.placeholder || '',
      onChange: this.testValue
    };

    if (this.state.invalid) {
      inputProps.className += ' error';
    }

    return (
        <div className="spares-input-block">
          <label className="spares-input-label">{this.props.label}</label>
          <input {...inputProps} />
          {this.state.invalid ? (<div className="spares-input-error">{this.props.message}</div>) : null}
        </div>
    );
  }
}

InputField.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  pattern: React.PropTypes.any.isRequired,
  message: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
}

export default InputField;
