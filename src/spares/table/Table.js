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
    this.state = {
      sort: {
        key: '',
        type: ''
      }
    };
    this.calcTotal = this.calcTotal.bind(this);
    this.sortBody = this.sortBody.bind(this);
    this.toggleSort = this.toggleSort.bind(this);
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

  calcTotal(body_items) {
    let calc_total = {}
    for (let item of body_items) {
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

  sortBody() {
    let self_state_sort = this.state.sort;
    let body_items = [...this.props.body.items];

    if (self_state_sort.type === 'asc') {
      return body_items.sort(function (a, b) {
        return (parseInt(a[self_state_sort.key], 10) - parseInt(b[self_state_sort.key], 10));
      });
    } else if (self_state_sort.type === 'desc') {
      return body_items.sort(function (a, b) {
        return (parseInt(b[self_state_sort.key], 10) - parseInt(a[self_state_sort.key], 10));
      });
    } else {
      return this.props.body.items;
    }
  }

  toggleSort(sort_key) {
    if (this.state.sort.type === '') {
      this.setState({
        sort: {key: sort_key, type: 'asc'}
      });
    } else if (this.state.sort.type === 'asc') {
      this.setState({
        sort: {key: sort_key, type: 'desc'}
      });
    } else if (this.state.sort.type === 'desc') {
      this.setState({
        sort: {key: '', type: ''}
      });
    }
  }

  render() {
    let body_items = this.sortBody();
    let total = this.calcTotal(body_items);

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
                          {v.sort ? (
                            <div className="sort"
                                onClick={() => this.toggleSort(v.sort) }>
                              {v.text}
                            </div>
                          ) : v.text}
                        </div>
                      )}
                    </div>
                  </th>
                )}
              </tr>
            )}
          </thead>

          <tbody>
            {body_items.map((item, index) =>
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
    React.PropTypes.arrayOf(
      React.PropTypes.arrayOf(
        React.PropTypes.shape({
          text: React.PropTypes.string.isRequired,
          sort: React.PropTypes.string
        })
      )
    )
  ),
  body: React.PropTypes.shape({
    items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    template: React.PropTypes.arrayOf(React.PropTypes.array).isRequired
  }),
  total: React.PropTypes.arrayOf(React.PropTypes.array).isRequired
}

export default Table;
