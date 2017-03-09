/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './List.css';

class List extends Component {
  render() {
    let items = this.props.items || [];
    let template = this.props.template || [];
    let message = `Spares uikit: <List /> component template should be an array of objects.
    Array item should have keys: 'label' and 'key'. Values of keys should be a string.
    Value in 'key' should be the key in items={}.
    Example: [
      {
        label: '',
        key: ''
      }, {
        label: '',
        key: ''
      }
    ]\n`;

    for (let t of template) {
      if (typeof t !== 'object') {
        throw new Error(message);
      } else {
        if (typeof t.label === 'object') {
          throw new Error(message);
        } else if (typeof t.key === 'object') {
          throw new Error(message);
        }
      }
    }

    return (
      <ul className="spares-list">
        {items.map((item, index) =>
          <li key={index} className="spares-list-item">
            {template.map((val, i) =>
              <div key={i} className="spares-list-unit">
                <span className="spares-list-label">{val.label}: </span>
                <span>{item[val.key]}</span>
              </div>
            )}
          </li>
        )}
      </ul>
    );
  }
}

List.propTypes = {
  items: React.PropTypes.array,
  template: React.PropTypes.array
};

export default List;
