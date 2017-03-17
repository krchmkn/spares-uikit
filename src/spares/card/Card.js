/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
        <div className="spares-card">{this.props.children}</div>
    );
  }
}

export default Card;
