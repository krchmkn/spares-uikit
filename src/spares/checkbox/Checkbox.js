/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import './Checkbox.css';

class Checkbox extends Component {
  render() {
    let inputProps = {
      className: 'spares-checkbox',
      type: 'checkbox'
    };

    return (
        <div className="spares-checkbox-block">
          {this.props.items.map((item, index) =>
            <label key={index} className="spares-checkbox-label">
            <input {...inputProps}
                  name={this.props.template.name}
                  value={item[this.props.template.keysInItems.value]} />
              <span>{item[this.props.template.keysInItems.text]}</span>
            </label>
          )}
        </div>
    );
  }
}

Checkbox.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  template: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    keysInItems:  React.PropTypes.shape({
      value: React.PropTypes.string.isRequired, // key in items
      text: React.PropTypes.string.isRequired // key in items
    })
  })
};

export default Checkbox;
