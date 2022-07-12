import { Typography, Space, Divider } from 'antd';
import React from 'react';

const { Title, Paragraph, Text, Link } = Typography;

const App = () => (
  <div className="typography-component">
    <Title level={2}>Typography components:</Title>
    <Divider orientation="left">Title component:</Divider>
    <Paragraph className="m0">Display title in different level.</Paragraph>
    <Title>h1. Commutatus</Title>
    <Title level={2}>h2. Commutatus</Title>
    <Title level={3}>h3. Commutatus</Title>
    <Title level={4}>h4. Commutatus</Title>
    <Title level={5}>h5. Commutatus</Title>
    <br />

    <Divider orientation="left">Text and Link Component:</Divider>
    <Paragraph>Provides multiple types of text and link.</Paragraph>
    <Space direction="vertical">
      <Text>Commutatus (default)</Text>
      <Text type="secondary">Commutatus (secondary)</Text>
      <Text type="success">Commutatus (success)</Text>
      <Text type="warning">Commutatus (warning)</Text>
      <Text type="danger">Commutatus (danger)</Text>
      <Text disabled>Commutatus (disabled)</Text>
      <Text mark>Commutatus (mark)</Text>
      <Text code>Commutatus (code)</Text>
      <Text keyboard>Commutatus (keyboard)</Text>
      <Text underline>Commutatus (underline)</Text>
      <Text delete>Commutatus (delete)</Text>
      <Text strong>Commutatus (strong)</Text>
      <Text italic>Commutatus (italic)</Text>
      <Link href="https://ant.design" target="_blank">
        Commutatus (Link)
      </Link>
    </Space>
    <Divider />
  </div>
);

export default App;
