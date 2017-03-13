/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggle = this.toggle.bind(this);
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

  render() {
    const children = this.props.children;
    return (
        <div className="spares-dropdown">
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
  children: React.PropTypes.element.isRequired,
  items: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      text: React.PropTypes.string,
      onclick: React.PropTypes.func
    })
  )
};

export default Dropdown;
