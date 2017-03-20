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
    this.state = {valid: false};
    this.changed = false;
  };

  testValue(event) {
    this.changed = true;
    if (event.target.value.length > 0) {
      if (this.props.pattern.test(event.target.value)) {
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
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  pattern: React.PropTypes.any.isRequired,
  message: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  onchange: React.PropTypes.func,
  type: React.PropTypes.string.isRequired
}

export default InputField;
