/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './Radio.css';

class Radio extends Component {
  render() {
    let inputProps = {
      className: 'spares-radio',
      type: 'radio'
    };

    return (
        <div className="spares-radio-block">
          {this.props.items.map((item, index) =>
            <label key={index} className="spares-radio-label">
            <input {...inputProps}
                  name={this.props.template.name}
                  value={item[this.props.template.value]} />
              <span>{item[this.props.template.text]}</span>
            </label>
          )}
        </div>
    );
  }
}

Radio.propTypes = {
  items: React.PropTypes.array.isRequired,
  template: React.PropTypes.object.isRequired
};


export default Radio;
