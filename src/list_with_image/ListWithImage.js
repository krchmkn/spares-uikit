/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './ListWithImage.css';

class ListWithImage extends Component {

  checkTemplate(template) {
    let message = `Spares uikit:
    <ListWithImage /> component template should be an object.
    Object properties should be a strings.
    'template.labels' should be an array of objects.
    Value in 'labels.key' should be the key in items={}
    Example:
    {
      header: 'name',
      pageLink: 'pagelink',
      image: 'image',
      description: 'description',
      labels: [
        {label: 'first name', key: 'first_name'},
        {label: 'second name', key: 'second_name'}
      ]
    }\n`;

    if (typeof template !== 'object') {
      throw new Error(message);
    }

    for (let tmpl in template) {
      if (tmpl) {
        switch (tmpl) {
          case 'header':
            if (typeof template[tmpl] !== 'string') {
              throw new Error(message);
            }
            break;
          case 'pageLink':
            if (typeof template[tmpl] !== 'string') {
              throw new Error(message);
            }
            break;
          case 'image':
            if (typeof template[tmpl] !== 'string') {
              throw new Error(message);
            }
            break;
          case 'description':
            if (typeof template[tmpl] !== 'string') {
              throw new Error(message);
            }
            break;
          case 'labels':
            if (typeof template[tmpl] !== 'object') {
              throw new Error(message);
            }
            break;
          default:
            throw new Error(message);
        }
      } else {
        throw new Error(message);
      }
    }
  }

  render() {

    let items = this.props.items;
    let template = this.props.template;

    this.checkTemplate(template);

    return (
      <ul className="spares-list-with-image">
        {items.map((item, index) =>
          <li className="spares-list-with-image-item" key={index}>
              <div className="spares-list-with-image-unit big">
                <a href="{item[template.pageLink]}"
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
                    <span className="spares-list-with-image-label">{t.label}: </span>
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
  items: React.PropTypes.array.isRequired,
  template: React.PropTypes.object.isRequired
};


export default ListWithImage;
