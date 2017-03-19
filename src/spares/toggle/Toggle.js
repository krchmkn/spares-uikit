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
    console.log(props)
    this.state = {
      checked: false
    };
  }

  toggle() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    let toggleProps = {
      className: this.state.checked ? 'spares-toggle-area checked' : 'spares-toggle-area',
      onClick: this.toggle,
      'data-checked': this.state.checked
    };

    return (
      <div className="spares-toggle-block">
        <label className="spares-toggle-label">
          <span {...toggleProps}>
            <span className="spares-toggle"></span>
          </span>
          <span>{this.props.label}</span>
        </label>
      </div>
    );
  };
}

Toggle.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool,
  onchange: React.PropTypes.func
};

export default Toggle;
