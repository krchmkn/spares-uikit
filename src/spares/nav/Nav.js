/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import './Nav.css';

class NavItem extends Component {
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
    return (
      <div onMouseLeave={this.close}>
        {this.props.data.link ? (
          <a href={this.props.data.link}
              title={this.props.data.text}
              className="spares-menu-item-link">{this.props.data.text}</a>
        ) : (
          <span className="spares-menu-item-link"
              onClick={this.toggle}>
            {this.props.data.text}
            <i className={this.props.dropdownIcon}></i>
          </span>
        )}

        {this.props.data.submenu ? (
          <div>
            {this.state.open ? (
              <ul className="spares-submenu animate zoomIn">
                {this.props.data.submenu.map((sub, i) =>
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
      </div>
    );
  }
}

class Nav extends Component {
  render() {
    return (
        <nav className="spares-nav">
          <ul className="spares-menu">
            {this.props.items.map((item, index) =>
              <li key={index} className="spares-menu-item">
                  <NavItem data={item} dropdownIcon={this.props.dropdownIcon}/>
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
  ),
  dropdownIcon: React.PropTypes.string
};

export default Nav;
