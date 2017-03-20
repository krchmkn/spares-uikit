/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import './Toggle.css';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      checked: props.checked
    };
  }

  toggle(e) {
    this.setState({
      checked: !this.state.checked
    }, () => {
      this.props.onchange(this.state.checked);
    });
  }

  render() {
    let toggleProps = {
      className: this.state.checked ? 'spares-toggle checked' : 'spares-toggle',
      onClick: this.toggle
    };

    return (
      <label {...toggleProps}>
        <span className="spares-trigger-area">
          <span className="spares-trigger"></span>
        </span>
        <span className="spares-toggle-label">{this.props.label}</span>
      </label>
    );
  };
}

Toggle.propTypes = {
  label: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool,
  onchange: React.PropTypes.func.isRequired
};

export default Toggle;
