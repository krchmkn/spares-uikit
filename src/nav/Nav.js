/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
        <nav className="spares-nav">
          <ul className="spares-menu">
            {this.props.items.map((item, index) =>
              <li key={index} className="spares-menu-item">
                <a href={item.link}
                    title={item.text}
                    className="spares-menu-item-link">{item.text}</a>
              </li>
            )}
          </ul>
        </nav>
    );
  }
}

Nav.propTypes = {
  items: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      link: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired
    })
  )
}

export default Nav;
