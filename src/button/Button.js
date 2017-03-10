/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    let inputProps = {
      type: (this.props.submit ? 'submit' : 'button'),
      className: (this.props.color ?
        'spares-button ' +  this.props.color : 'spares-button')
    };

    if (this.props.disabled) {
      inputProps.disabled = 'disabled';
    }

    return (
      <button {...inputProps}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  color: React.PropTypes.string,
  submit: React.PropTypes.bool,
  disabled: React.PropTypes.bool
}


export default Button;
