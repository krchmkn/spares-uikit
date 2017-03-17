/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
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
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  template: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(
      React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        key: React.PropTypes.string.isRequired // key in items
      })
    )
  )
};

export default List;
