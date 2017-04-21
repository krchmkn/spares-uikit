/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import './Accordion.css';

class AccordionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    if (this.state.open) {
      this.setState({open: false});
    } else {
      this.setState({open: true});
    }
  }

  render() {
    let inpurProps = {
      className: 'spares-accordion-item',
    };

    if (this.state.open) {
      inpurProps.className += ' open';
    }

    return (
      <li onClick={this.toggle} {...inpurProps}>
        <div className="spares-accordion-header">
          <div className="spares-accordion-header-text">
            {this.props.item[this.props.template.header]}
          </div>
          <div className="spares-accordion-header-icon">
            {this.state.open ? (
              <i className={this.props.icons.open}></i>
            ) : (
              <i className={this.props.icons.close}></i>
            )}
          </div>
        </div>
        {this.state.open ? (
          <div className="spares-accordion-body">
            <ReactMarkdown source={this.props.item[this.props.template.body]} />
          </div>
        ) : null}
      </li>
    );
  }
}

class Accordion extends Component {
  render() {
    return (
      <ul className="spares-accordion">
        {this.props.items.map((item, index) =>
          <AccordionItem key={index}
                          item={item}
                          template={this.props.template}
                          icons={this.props.icons} />
        )}
      </ul>
    );
  }
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  template: PropTypes.shape({
    header: PropTypes.string.isRequired, // key in items
    body: PropTypes.string.isRequired // key in items
  }),
  icons:  PropTypes.shape({
    open: PropTypes.string,
    close: PropTypes.string
  })
}

export default Accordion;
