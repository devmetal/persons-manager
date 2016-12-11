import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

import Dump from './DumpComponent';

class DumpContainer extends Component {
  render() {
    const { datas } = this.props;
    return (
      <Dump datas={JSON.stringify(datas)} />
    )
  }
}

const dumpSelector = createSelector(
  store => store.persons,
  (persons) => persons.map((p) => {
    return {...p, id: undefined};
  })
);

const mapStateToProps = store => ({
  datas: dumpSelector(store)
});

export default connect(mapStateToProps)(DumpContainer); 
