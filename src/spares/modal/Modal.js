/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
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
    return (
      <div>
        <div className="spares-modal-button"
              onClick={this.toggle}>
          {this.props.buttonText}
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
                {this.props.children}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

Modal.propTypes = {
  header: React.PropTypes.string.isRequired,
  buttonText: React.PropTypes.string.isRequired,
  closeIcon: React.PropTypes.string
}

export default Modal;
