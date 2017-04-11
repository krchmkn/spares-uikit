/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  flex: PropTypes.bool
}

export default Block;
