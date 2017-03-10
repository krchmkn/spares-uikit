/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './List.css';

class List extends Component {

  checkTemplate(template) {
    let message = `Spares uikit: <List /> component template should be an array of items.
    Item in array should be an array of objects. Object should have keys: 'label' and 'key'.
    Values of keys should be a strings. Value in 'key' should be the key in items={}.
    Example:
    [
      [ { label: 'My name is', key: 'first_name' }, { label: 'My surname is', key: 'second_name' } ],
      [ { label: 'I am from', key: 'address' } ]
    ]\n`;

    for (let tmpl of template) {
      if (typeof tmpl !== 'object') {
        throw new Error(message);
      } else {
        if (tmpl.length == null || tmpl.length === 0) {
          throw new Error(message);
        } else {
          for (let t of tmpl) {
            if (typeof t.label === 'object') {
              throw new Error(message);
            } else if (typeof t.key === 'object') {
              throw new Error(message);
            } else {
              return true;
            }
          }
        }
      }
    }
  }

  render() {
    let items = this.props.items || [];
    let template = this.props.template || [];

    this.checkTemplate(template);

    return (
      <ul className="spares-list">
        {items.map((item, index) =>
          <li key={index} className="spares-list-item">
            {template.map((val, indx) =>
              <div key={indx} className="spares-list-unit">
                {val.map((v, i) =>
                  <div key={i} className="spares-list-unit-row">
                    <span className="spares-list-label">{v.label}: </span>
                    <span>{item[v.key]}</span>
                  </div>
                )}
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
