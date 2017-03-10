/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './TextField.css';

class TextField extends Component {
  constructor(props) {
    super(props);
    this.testValue = this.testValue.bind(this);
    this.state = {invalid: false};
  };

  testValue(event) {
    let val = event.target.value;
    let props_len = parseInt(this.props.char_count, 10);

    if (val.length > props_len) {
      this.setState({invalid: true});
    } else {
      this.setState({invalid: false});
    }
  };

  render() {
    let inputProps = {
      className: 'spares-textarea',
      name: this.props.name || '',
      placeholder: this.props.placeholder || '',
    };

    if (this.props.char_count) {
      inputProps.onChange = this.testValue;
    }

    if (this.state.invalid) {
      inputProps.className += ' error';
    }

    return (
        <div className="spares-textarea-block">
          <label className="spares-textarea-label">{this.props.label}</label>
          <textarea {...inputProps}></textarea>
          {this.state.invalid ? (<div className="spares-textarea-error">{this.props.message}</div>) : null}
        </div>
    );
  }
}

TextField.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  char_count: React.PropTypes.number,
  message: React.PropTypes.string,
  placeholder: React.PropTypes.string,
}

export default TextField;
