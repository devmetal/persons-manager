// @flow

import React, { Component } from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import Checkbox from 'antd/lib/checkbox';

const { Item } = Form;

class AddPersonForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Item>
          {
            getFieldDecorator('name', {
              rules: [{ required: true }]
            })(
              <Input placeholder="Employe name" />
              )
          }
        </Item>
        <Item>
          {
            getFieldDecorator('nick', {
              rules: [{ required: true }]
            })(
              <Input placeholder="Nick name" />
              )
          }
        </Item>
        <Item>
          {
            getFieldDecorator('job', {
              rules: [{ required: true }]
            })(
              <Input placeholder="Job Title" />
              )
          }
        </Item>
        <Item label="Employee age">
          {
            getFieldDecorator('age', {
              initialValue: 21,
              rules: [{ required: true }]
            })(
              <InputNumber min={18} max={99} />
              )
          }
        </Item>
        <Item>
          {getFieldDecorator('employee', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Employee</Checkbox>
            )}
        </Item>
      </Form>
    )
  }
}

export default Form.create()(AddPersonForm);
