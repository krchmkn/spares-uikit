/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    let self = this;
    window.addEventListener('click', function () {
      if (self.state.open) {
        self.toggle(event);
      }
    })
  }

  toggle(event) {
    this.setState({
      open: !this.state.open
    });
    event.stopPropagation();
  }

  close() {
    this.setState({
      open: false
    });
  }

  render() {
    const children = this.props.children;
    return (
        <div className="spares-dropdown" onMouseLeave={this.close}>
          <div onClick={this.toggle}>
            {children}
          </div>

          {this.state.open ? (
            <ul className="spares-dropdown-block animate zoomIn">
              {this.props.items.map((item, index) =>
                <li className="spares-dropdown-block-item"
                    key={index}
                    onClick={item.onclick}>
                  <div className="spares-dropdown-block-text">
                    {item.text}
                  </div>
                </li>
              )}
            </ul>
          ) : null}
        </div>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.element.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      onclick: PropTypes.func
    })
  )
};

export default Dropdown;
