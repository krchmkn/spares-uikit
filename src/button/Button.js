/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  createIcon(icon) {
    const iconClasses = {
      dropdown: 'icon ion-android-arrow-dropdown',
      remove: 'icon ion-ios-trash-outline',
      menu: 'icon ion-android-more-vertical',
      edit: 'icon ion-edit',
      refresh: 'icon ion-refresh'
    };

    icon = icon.toLowerCase();
    if (iconClasses.hasOwnProperty(icon)) {
      return <i className={iconClasses[icon]}></i>
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
  color: React.PropTypes.string,
  submit: React.PropTypes.bool,
  onclick: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  icon: React.PropTypes.string
}


export default Button;
