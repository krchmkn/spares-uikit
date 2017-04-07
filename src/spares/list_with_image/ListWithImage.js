/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import './ListWithImage.css';

class ListWithImage extends Component {
  render() {
    const items = this.props.items;
    const template = this.props.template;

    return (
      <ul className="spares-list-with-image">
        {items.map((item, index) =>
          <li className="spares-list-with-image-item" key={index}>
              <div className="spares-list-with-image-unit big">
                <a href={item[template.pageLink]}
                    target="_blank"
                    className="spares-list-with-image-header">
                  {item[template.header]}
                </a>

                <div className="spares-list-with-image-flex">
                  <div className="spares-list-with-image-unit">
                    <img className="spares-list-with-image-pic"
                          src={item[template.image]} alt={item[template.header]} />
                  </div>
                  <div className="spares-list-with-image-unit">
                    <p className="spares-list-with-image-description">
                      {item[template.description]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="spares-list-with-image-unit small">
                {template.labels.map((t, i) =>
                  <div className="spares-list-with-image-unit-row" key={i}>
                    <span className="spares-list-with-image-label">
                      <i className={t.icon}></i>
                      {t.label}: </span>
                    <span>{item[t.key]}</span>
                  </div>
                )}
              </div>
          </li>
        )}
      </ul>
    );
  }
}

ListWithImage.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  template: React.PropTypes.shape({
    header: React.PropTypes.string.isRequired,
    pageLink: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    labels: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        key: React.PropTypes.string.isRequired, // key in items
        icon: React.PropTypes.string
      })
    )
  })
};


export default ListWithImage;
