import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space, Typography, Divider, Card } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

const App = () => (
  <div className="badge-component">
    <Title level={2}>Badge component:</Title>
    <Title level={5}>Basic Badge:</Title>
    <br />
    <Space size="large">
      <Badge count={5}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={0} showZero>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge
        count={
          <ClockCircleOutlined
            style={{
              color: '#f5222d',
            }}
          />
        }
      >
        <Avatar shape="square" size="large" />
      </Badge>
    </Space>
    <br />
    <br />

    <Title level={5}>Status Badge:</Title>
    <Paragraph>Standalone badge with status.</Paragraph>
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="processing" />
    <Badge status="warning" />
    <br />
    <Badge status="success" text="Success" />
    <br />
    <Badge status="error" text="Error" />
    <br />
    <Badge status="default" text="Default" />
    <br />
    <Badge status="processing" text="Processing" />
    <br />
    <Badge status="warning" text="Warning" />
    <br />
    <br />

    <Title level={5}>Ribbon Badge: </Title>
    <Badge.Ribbon text="Hippies" color="pink">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Divider />
  </div>
);

export default App;
