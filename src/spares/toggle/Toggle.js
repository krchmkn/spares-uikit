/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import './Toggle.css';

class ToggleItem extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {checked: false};
  }

  toggle() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    let checkboxProps = {
      className: 'spares-toggle-checkbox',
      type: 'checkbox'
    };
    let toggleProps = {
      className: this.state.checked ? 'spares-toggle-area checked' : 'spares-toggle-area',
      onClick: this.toggle,
      'data-checked': this.state.checked
    };

    return (
      <label className="spares-toggle-label">
        <span {...toggleProps}>
          <span className="spares-toggle"></span>
        </span>
        <span>{this.props.item[this.props.template.keysInItems.text]}</span>
      </label>
    );
  };
}

class Toggle extends Component {
  render() {
    return (
      <div className="spares-toggle-block">
        {this.props.items.map((item, index) =>
          <ToggleItem key={index} item={item}
                      template={this.props.template} />
        )}
      </div>
    );
  };
}

Toggle.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  template: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    keysInItems:  React.PropTypes.shape({
      value: React.PropTypes.string.isRequired, // key in items
      text: React.PropTypes.string.isRequired // key in items
    })
  })
};

export default Toggle;
