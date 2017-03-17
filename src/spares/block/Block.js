/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
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

Block.propTypes = {
  flex: React.PropTypes.bool
}

export default Block;
