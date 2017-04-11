/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
  createIcon(icon) {
    if (icon) {
      return <i className={icon}></i>
    }
    return null;
  }

  render() {
    let inputProps = {
      type: (this.props.submit ? 'submit' : 'button'),
      className: this.props.color ?
          'spares-button ' +  this.props.color : 'spares-button',
      onClick: this.props.onclick
    };

    if (this.props.disabled) {
      inputProps.disabled = 'disabled';
    }

    if (this.props.icon) {
      inputProps.className += ' icon';
    }

    return (
      <button {...inputProps}>
        {this.createIcon(this.props.icon)}
        {this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  icon: ''
};

Button.propTypes = {
  color: PropTypes.string,
  submit: PropTypes.bool,
  onclick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.string
}


export default Button;
