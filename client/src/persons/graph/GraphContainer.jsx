// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { closeGraph } from '../controls/ControlActions';
import Modal from 'antd/lib/modal';
import Button from 'antd/lib/button';

import Graph from './Graph';

class GraphContainer extends Component {

  handleClose = () => {
    this.props.dispatch(closeGraph());
  }

  render() {
    const { ages, visible } = this.props;
    return (
      <Modal
        visible={visible}
        title="Ages graph"
        onCancel={this.handleClose}
        footer={[
          <Button key="back" type="ghost" size="large" onClick={this.handleClose}>Close</Button>,
        ]}
        >
        <Graph ages={ages} />
      </Modal>
    )
  }
}

const graphSelector = createSelector(
  store => store.persons,
  (persons) => {
    const ages = persons
      .filter(p => p.employee)
      .map((p) => {
        if (p.age) return p;
        return Object.assign({}, p, { age: 0 });
      })
      .reduce((acc, person) => {
        const { age } = person;
        if (!acc.hasOwnProperty(age)) {
          acc[age] = 1;
        } else {
          acc[age]++;
        }
        return acc;
      }, {});

    return Object.keys(ages).map(k => ({
      key: k,
      value: ages[k]
    }));
  }
);

const mapStateToProps = store => ({
  ages: graphSelector(store),
  visible: store.controls.graph
});

export default connect(mapStateToProps)(GraphContainer);
