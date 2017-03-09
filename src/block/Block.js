/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './Block.css';

class Block extends Component {
  render() {

    let inputProps = {
      className: 'spares-block'
    };

    if (this.props.flex) {
      inputProps.className += ' flex';
    }

    return (
      <div {...inputProps}>
        {this.props.children}
      </div>
    );
  }
}

export default Block;
