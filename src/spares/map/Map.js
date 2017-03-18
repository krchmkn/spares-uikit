/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import './Map.css';

class Map extends Component {
  componentDidMount() {
    this.props.whenMounted();
  }

  render() {
    return (
      <div className="spares-map-block">
        {this.props.children ? (
          <div className="spares-address-block">
            {this.props.children}
          </div>
        ) : null}
        <div id="spares-map" className="spares-map"></div>
      </div>
    );
  }
}

Map.propTypes = {
  whenMounted: React.PropTypes.func.isRequired
};

export default Map;
