import { Button, Drawer, Typography, Divider, Space } from 'antd';
import React, { useState } from 'react';

const { Title } = Typography;

const App = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div id="drawer-component">
      <Title level={2}>Drawer component:</Title>
      <Title level={5}>Basic:</Title>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Divider />
    </div>
  );
};

export default App;
