/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
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
  center: React.PropTypes.bool,
  medium: React.PropTypes.bool,
  small: React.PropTypes.bool
};

export default Header;
