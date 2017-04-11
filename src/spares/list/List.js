/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './List.css';

class List extends Component {
  render() {
    const items = this.props.items;
    const template = this.props.template;

    return (
      <ul className="spares-list">
        {items.map((item, index) =>
          <li key={index} className="spares-list-item">
            {template.map((val, indx) =>
              <div key={indx} className="spares-list-unit">
                {val.map((v, i) =>
                  <div key={i} className="spares-list-unit-row">
                    <span className="spares-list-label">
                        <i className={v.icon}></i>
                        {v.label}: </span>
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
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  template: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired, // key in items
        icon: PropTypes.string
      })
    )
  )
};

export default List;
