/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  render() {
    let inputProps = {
      className: 'spares-header'
    };

    if (this.props.center) {
      inputProps.className += ' center';
    }

    let header = <h1 {...inputProps}>{this.props.children}</h1>;

    if (this.props.medium) {
      header = <h2 {...inputProps}>{this.props.children}</h2>;
    } else if (this.props.small) {
      header = <h3 {...inputProps}>{this.props.children}</h3>;
    }

    return header;
  }
}

Header.propTypes = {
  center: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool
};

export default Header;
