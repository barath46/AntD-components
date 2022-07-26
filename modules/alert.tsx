import { Alert, Typography, Divider, Button, Space } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

const App: React.FC = () => (
  <div id="alert-component">
    <Title level={2}>Alert component:</Title>
    <Paragraph>When you need to show alert messages to users.</Paragraph>
    <Space direction="vertical">
      <Alert message="Success Text" type="success" />
      <Alert message="Info Text" type="info" />
      <Alert message="Warning Text" type="warning" />
      <Alert message="Error Text" type="error" />
    </Space>
    <br />
    <br />
    <Title level={5}>Closable alert</Title>
    <Alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      type="warning"
      closable
    />
    <br />
    <br />
    <Title level={5}>Alert with icon</Title>
    <Alert message="Success Tips" type="success" showIcon />
    <br />
    <br />
    <Title level={5}>Custom action alert</Title>
    <Alert
      message="Error Text"
      showIcon
      description="Error Description Error Description Error Description Error Description"
      type="error"
      action={
        <Button size="small" danger>
          Detail
        </Button>
      }
    />
    <Divider />
  </div>
);

export default App;
