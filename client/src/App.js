import React, { Component } from 'react';
import Table from './persons/table/TableContainer';
import Dump from './persons/dump/DumpContainer';
import Add from './persons/addperson/AddPersonModal';
import Controls from './persons/controls/ControlPanel';
import Graph from './persons/graph/GraphContainer';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

class App extends Component {
  render() {
    return (
      <div>
        <Row className="controls" type="flex" align="middle" justify="center">
          <Col span={18}>
            <Controls />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={18}>
            <Table />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={18}>
            <Dump />
          </Col>
        </Row>
        <Add />
        <Graph />
      </div>
    );
  }
}

export default App;
