/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="spares-search-block">
        <input type="text" name="search" className="spares-search-input"
                placeholder={this.props.placeholder} />
        <button type="submit" className="spares-search-button">
          <i className={this.props.buttonIcon}></i>
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  placeholder: React.PropTypes.string.isRequired,
  buttonIcon: React.PropTypes.string.isRequired
}

export default Search;
