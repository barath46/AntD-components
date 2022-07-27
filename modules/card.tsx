import { Card, Typography, Divider, Avatar, Skeleton } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

const { Meta } = Card;

const App = () => (
  <div id="card-component">
    <Title level={2}>Card component:</Title>
    <Title level={5}>Basic Card:</Title>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <br />
    <br />

    <Title level={5}>Card with hover:</Title>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
      hoverable
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <br />
    <br />

    <Title level={5}>Loading card:</Title>
    <Card style={{ width: 300, marginTop: 16 }} loading={true}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Divider />
  </div>
);

export default App;
