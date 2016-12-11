// @flow

import React, { Component } from 'react';
import Modal from 'antd/lib/modal';
import { connect } from 'react-redux';
import { closeAddPerson } from '../controls/ControlActions';
import { addPerson } from '../PersonActions';
import AddPerson from './AddPerson';

class AddPersonModal extends Component {
  
  form: any;

  handleClose = () => {
    this.props.dispatch(closeAddPerson());
    this.form.resetFields();
  }

  handleOk = () => {
    const { form } = this;
    form.validateFields((err, values) => {
      if (err) return;

      form.resetFields();
      this.props.dispatch(addPerson(values));
      this.props.dispatch(closeAddPerson());
    });
  }

  formRef = (form) => {
    this.form = form;
  }
  
  render() {
    const { visible } = this.props;
    return (
      <Modal
        title="Basic Modal"
        onCancel={this.handleClose}
        onOk={this.handleOk}
        okText="Save"
        cancelText="Cancel"
        visible={visible}
      >
        <AddPerson ref={this.formRef} />
      </Modal>
    )
  }
}

const mapStateToProps = store => ({
  visible: store.controls.addPerson
});

export default connect(mapStateToProps)(AddPersonModal);
