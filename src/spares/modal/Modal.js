/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    })
  }

  cancelBubbling(event) {
    event.stopPropagation();
  }

  render() {
    const childrens = this.props.children || [null, null, null];

    return (
      <div>
        <div className="spares-modal-button"
              onClick={this.toggle}>
          {childrens[0]}
        </div>

        {this.state.open ? (
          <div className="spares-modal-wrap" onClick={this.toggle}>
            <div className="spares-modal animate zoomIn"
            onClick={this.cancelBubbling}>
              <div className="spares-modal-header">
                <span>{this.props.header}</span>
                <span onClick={this.toggle} className="spares-modal-close">
                  <i className={this.props.closeIcon}></i>
                </span>
              </div>
              <div className="spares-modal-body">
                {childrens[1]}
              </div>
              <div className="spares-modal-footer">
                <div onClick={this.toggle}>
                  {childrens[2]}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  closeIcon: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default Modal;
