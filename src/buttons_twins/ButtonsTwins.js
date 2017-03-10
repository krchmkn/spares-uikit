/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './ButtonsTwins.css';

class ButtonsTwins extends Component {
  action(event) {
    for (let btn of event.target.parentNode.childNodes) {
      if (btn === event.target) {
        if (!btn.classList.contains('active')) {
          btn.classList.add('active');
        }
      } else {
        if (btn.classList.contains('active')) {
          btn.classList.remove('active');
        }
      }
    }
  }

  checkItems(items) {
    let message = `Spares uikit: <ButtonsTwins /> component property items
    should be an array of objects. 'Object.text' should be a string.
    'Object.onclick' should be a function;
    Example:
    [{
        text: 'Click me',
        onclick: foo.bind(null, 'foo')
      }, {
        text: 'And me',
        onclick: bar.bind(null, 'bar')
      }];\n`;
    if (typeof items === 'object') {
      if (items.length != null) {
        for (let item of items) {
          if (typeof items === 'object') {
            if (typeof item.text !== 'string') {
              throw new Error(message);
            } else if (typeof item.onclick !== 'function') {
              throw new Error(message);
            }
          } else {
            throw new Error(message);
          }
        }
      } else {
        throw new Error(message);
      }
    } else {
      throw new Error(message);
    }
  }

  render() {
    let items = this.props.items;

    this.checkItems(items)

    return (
      <div className="spares-buttons-twins">
        {items.map((item, index) =>
          <button type="button" key={index}
                  className="spares-buttons-twins-item"
                  onFocus={this.action}
                  onClick={item.onclick}>
              {item.text}
          </button>
        )}
      </div>
    );
  }
}

ButtonsTwins.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default ButtonsTwins;
