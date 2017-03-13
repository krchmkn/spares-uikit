/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    let temp_state = {}
    for (let i in props.items) {
      if (props.items[i].hasOwnProperty('submenu')) {
        temp_state[`submenu${i}_open`] = false;
      }
    }
    this.state = temp_state;
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
    return (
        <nav className="spares-nav">
          <ul className="spares-menu">
            {this.props.items.map((item, index) =>
              <li key={index} className="spares-menu-item"
                  onMouseLeave={this.close}>

                {item.link ? (
                  <a href={item.link}
                      title={item.text}
                      className="spares-menu-item-link">{item.text}</a>
                ) : (
                  <span className="spares-menu-item-link"
                    onClick={this.toggle}>{item.text}</span>
                )}

                {item.submenu ? (
                  <div>
                    {this.state.open ? (
                      <ul className="spares-submenu animate zoomIn">
                        {item.submenu.map((sub, i) =>
                          <li className="spares-submenu-item"
                              key={i}>
                            <a href={sub.link}
                                title={sub.text}
                                className="spares-menu-item-link">{sub.text}</a>
                          </li>
                        )}
                      </ul>
                    ) : null}
                  </div>
                ) : null}

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
      link: React.PropTypes.string,
      text: React.PropTypes.string.isRequired,
      submenu: React.PropTypes.arrayOf(
          React.PropTypes.shape({
            link: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired
          })
      )
    })
  )
};

export default Nav;
