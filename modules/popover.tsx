import { Button, Popover, Typography, Divider } from 'antd';
import React, { useState } from 'react';

const { Title } = Typography;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const App = () => {
  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (newVisible: boolean) => {
    setVisible(newVisible);
  };

  return (
    <div id="popover-component">
      <Title level={2}>Popover component:</Title>
      <Title level={5}>Basic:</Title>
      <Popover content={content} title="Title">
        <Button type="primary">Hover me</Button>
      </Popover>
      <br />
      <br />
      <Title level={5}>Popover with close:</Title>
      <Popover
        content={<a onClick={hide}>Close</a>}
        title="Title"
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
      >
        <Button type="primary">Click me</Button>
      </Popover>
      <Divider />
    </div>
  );
};

export default App;
