// @flow

import type { Person } from '../flowtypes';
import React, { Component } from 'react';
import Table from 'antd/lib/table';
import Button from 'antd/lib/button';

const { Column } = Table;

type TableState = {
  deleting: ?string,
};

class TableComponent extends Component {

  confirm: Function = (id: string) => {
    this.setState({
      deleting: id,
    });
  }

  doDelete: Function = () => {
    const { deleting } = this.state;

    this.setState({
      deleting: null,
    });

    this.props.onDelete(deleting);
  }

  cancel: Function = () => {
    this.setState({
      deleting: null,
    });
  }

  state: TableState = {
    deleting: null
  }

  render() {
    const { persons } = this.props;
    const { deleting } = this.state;

    const deleteBtn = (id: string) =>
      <Button onClick={() => this.confirm(id)}> Delete </Button>

    const confirmPanel = () =>
      <div>
        Sure? <br />
        <Button type="primary" onClick={this.doDelete}> Yes </Button>
        <Button onClick={this.cancel}> No </Button>
      </div>

    const actionPanel = (record: Person) => {
      const { id } = record;
      if (deleting && deleting === id) {
        return confirmPanel();
      } else {
        return deleteBtn(id);
      }
    }

    return (
      <Table pagination={{
        pageSize: 5
      }} dataSource={persons}>
        <Column
          title="name"
          dataIndex="name"
          key="name"
          />
        <Column
          title="Job"
          dataIndex="job"
          key="job"
          />
        <Column
          title="Age"
          dataIndex="age"
          key="age"
          />
        <Column
          title="Nickname"
          dataIndex="nick"
          key="nick"
          />
        <Column
          title="Is Employee"
          dataIndex="employee"
          key="employee"
          />
        <Column
          title="Delete"
          key="delete"
          render={(text, record) => actionPanel(record)}
          />
      </Table>
    )
  }
}

export default TableComponent;
