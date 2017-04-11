/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Radio.css';

class Radio extends Component {
  render() {
    let inputProps = {
      className: 'spares-radio',
      type: 'radio',
      onChange: this.props.onchange
    };

    return (
        <div className="spares-radio-block">
          {this.props.items.map((item, index) =>
            <label key={index} className="spares-radio-label">
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

Radio.propTypes = {
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


export default Radio;
