/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
  render() {
    return (
      <div className="spares-table-wrap">
        <table className="spares-table">
          <thead>
            {this.props.head.map((item, index) =>
              <tr key={index}>
                {item.map((val, indx) =>
                  <th key={indx}>
                    <div className="spares-subtable">
                      {val.map((v, i) =>
                        <div key={i} className="spares-subcol">
                          {v}
                        </div>
                      )}
                    </div>
                  </th>
                )}
              </tr>
            )}
          </thead>

          <tbody>
            {this.props.body.map((item, index) =>
              <tr key={index}>
                {item.map((val, indx) =>
                  <td key={indx}>
                    <div className="spares-subtable">
                      {val.map((v, i) =>
                        <div key={i} className="spares-subcol">
                          {v}
                        </div>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            )}
          </tbody>

          <tfoot>
            <tr>
              {this.props.total.map((item, index) =>
                <td key={index}>
                  <div className="spares-subtable">
                    {item.map((val, i) =>
                      <div key={i} className="spares-subcol">
                        {val}
                      </div>
                    )}
                  </div>
                </td>
              )}
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  head: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(React.PropTypes.array)
  ),
  body: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(React.PropTypes.array)
  ),
  total: React.PropTypes.arrayOf(React.PropTypes.array)
}

export default Table;
