/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    let header = <h1 className="spares-header">{this.props.children}</h1>;

    if (this.props.medium) {
      header = <h2 className="spares-header">{this.props.children}</h2>;
    } else if (this.props.small) {
      header = <h3 className="spares-header">{this.props.children}</h3>;
    }

    return header;
  }
}

export default Header;
