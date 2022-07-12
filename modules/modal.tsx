import { Button, Modal, Typography, Divider } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const { Title } = Typography;

const { confirm } = Modal;

const showConfirm = () => {
  confirm({
    title: 'Do you Want to delete these items?',
    icon: <ExclamationCircleOutlined />,
    content: 'Some descriptions',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div id="modal-component">
      <Title level={2}>Modal component:</Title>
      <Title level={5}>Basic:</Title>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <br />
      <br />
      <Title level={5}>Confirmation modal dialog:</Title>
      <Button onClick={showConfirm}>Confirm</Button>
      <Divider />
    </div>
  );
};

export default App;
