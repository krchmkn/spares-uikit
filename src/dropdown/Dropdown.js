/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  render() {
    console.log(this.props.children)
    return (
        <div className="spares-dropdown">
          {this.props.children}
        </div>
    );
  }
}

export default Dropdown;
