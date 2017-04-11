/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  template: PropTypes.shape({
    header: PropTypes.string.isRequired,
    pageLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired, // key in items
        icon: PropTypes.string
      })
    )
  })
};


export default ListWithImage;
