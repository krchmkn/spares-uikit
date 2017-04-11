/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

class Checkbox extends Component {
  render() {
    let inputProps = {
      className: 'spares-checkbox',
      type: 'checkbox',
      onChange: this.props.onchange
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
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  template: PropTypes.shape({
    name: PropTypes.string.isRequired,
    keysInItems:  PropTypes.shape({
      value: PropTypes.string.isRequired, // key in items
      text: PropTypes.string.isRequired // key in items
    })
  }),
  onchange: PropTypes.func.isRequired
};

export default Checkbox;
