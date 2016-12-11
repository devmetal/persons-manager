// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openAddPerson, openGraph } from './ControlActions';
import Button from 'antd/lib/button';

const ButtonGroup = Button.Group;

class ControlPanel extends Component {
  onOpenForm = () => {
    this.props.dispatch(openAddPerson());
  }

  onOpenGraph = () => {
    this.props.dispatch(openGraph());
  }

  render() {
    return (
      <div>
        <ButtonGroup>
          <Button type="primary" onClick={this.onOpenForm}> Add </Button>
          <Button type="primary" onClick={this.onOpenGraph}> Graph </Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default connect()(ControlPanel);
