/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './Paragraph.css';

class Paragraph extends Component {
  render() {
    return (
        <p className="spares-paragraph">{this.props.children}</p>
    );
  }
}

export default Paragraph;
