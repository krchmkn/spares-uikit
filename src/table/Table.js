/**
*
* Spares uikit v1.0 2017
* Author Dmitri Korchemkin
*/

import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.calcTotal = this.calcTotal.bind(this);
  }

  checkData(t, item) {
    if (t !== 'group_name') {
      if (item[t]) {
        return Math.floor(item[t]);
      } else {
        return 0;
      }
    }
    return item[t];
  }

  calcTotal() {
    let calc_total = {}
    for (let item of this.props.body.items) {
      for (let tl of this.props.total) {
        for(let t of tl) {
          if (item.hasOwnProperty(t)) {
            if (calc_total.hasOwnProperty(t)) {
              if (item[t]) {
                calc_total[t] += Math.floor(item[t]);
              } else {
                calc_total[t] += 0;
              }
            } else {
              if (item[t]) {
                calc_total[t] = Math.floor(item[t]);
              } else {
                calc_total[t] = 0;
              }
            }
          }
        }
      }
    }

    return calc_total;
  }

  render() {
    let total = this.calcTotal();

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
            {this.props.body.items.map((item, index) =>
              <tr key={index}>
                {this.props.body.template.map((tmpl, indx) =>
                  <td key={indx}>
                    <div className="spares-subtable">
                        {tmpl.map((t, i) =>
                          <div key={i} className="spares-subcol">
                            {this.checkData(t, item)}
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
                        {total.hasOwnProperty(val) ? total[val] : val}
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
    React.PropTypes.arrayOf(React.PropTypes.array).isRequired
  ),
  body: React.PropTypes.shape({
    items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    template: React.PropTypes.arrayOf(React.PropTypes.array).isRequired
  }),
  total: React.PropTypes.arrayOf(React.PropTypes.array).isRequired
}

export default Table;
