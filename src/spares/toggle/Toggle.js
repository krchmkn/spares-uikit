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
  constructot(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {checked: false}
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
      className: 'spares-toggle-area'
      onClick: this.toggle,
      'data-checked': this.state.checked
    };

    if (this.state.checked) {
      checkboxProps.checked = 'checked';
      toggleProps.className = ' checked';
    }

    return (
      <div className="spares-toggle-block">
        {this.props.items.map((item, index) =>
          <label key={index} className="spares-toggle-label">
            <span {...toggleProps}>
              <span className="spares-toggle"></span>
              <input {...checkboxProps}
                    name={this.props.template.name}
                    value={item[this.props.template.keysInItems.value]} />
            </span>
            <span>{item[this.props.template.keysInItems.text]}</span>
          </label>
        )}
      </div>
    );
  }
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
