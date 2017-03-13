/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
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
