/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
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
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  template: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    keysInItems:  React.PropTypes.shape({
      value: React.PropTypes.string.isRequired, // key in items
      text: React.PropTypes.string.isRequired // key in items
    })
  }),
  onchange: React.PropTypes.func.isRequired
};


export default Radio;
