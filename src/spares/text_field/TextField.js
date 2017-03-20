/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import './TextField.css';

class TextField extends Component {
  constructor(props) {
    super(props);
    this.testValue = this.testValue.bind(this);
    this.state = {valid: false};
    this.changed = false;
  };

  testValue(event) {
    let val = event.target.value;
    let props_len = parseInt(this.props.char_count, 10);
    this.changed = true;

    if (val.length > props_len) {
      this.setState({valid: false}, () => {
        this.props.onchange(this.state.valid);
      });
    } else {
      this.setState({valid: true}, () => {
        this.props.onchange(this.state.valid);
      });
    }
  };

  render() {
    let inputProps = {
      className: 'spares-textarea',
      name: this.props.name || '',
      placeholder: this.props.placeholder || ''
    };

    if (this.props.char_count) {
      inputProps.onChange = this.testValue;
    }

    if (!this.state.valid && this.changed) {
      inputProps.className += ' error';
    }

    return (
        <div className="spares-textarea-block">
          <label className="spares-textarea-label">{this.props.label}</label>
          <textarea {...inputProps}></textarea>
          {!this.state.valid && this.changed ? (<div className="spares-textarea-error">{this.props.message}</div>) : null}
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
  onchange: React.PropTypes.func.isRequired
}

export default TextField;
