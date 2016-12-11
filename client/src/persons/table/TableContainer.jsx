// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPersons, removePerson } from '../PersonActions';
import { createSelector } from 'reselect'
import Table from './TableComponent';

class TableContainer extends Component {

  onDelete = (id: string) => {
    this.props.dispatch(removePerson(id));
  }

  componentDidMount() {
    this.props.dispatch(fetchPersons());
  }

  render() {
    const { persons } = this.props;
    return (
      <div>
        <Table 
          persons={persons}
          onDelete={this.onDelete} 
        />
      </div>
    )
  }
}

const tableSelector = createSelector(
  store => store.persons,
  (persons) => persons.map((p) => {
    const employee = p.employee ? 'Yes' : 'No';
    return {...p, employee};
  })
);

const mapStateToProps = store => ({
  persons: tableSelector(store)
});

export default connect(mapStateToProps)(TableContainer);
