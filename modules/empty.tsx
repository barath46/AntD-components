import { Empty, Typography, Divider } from 'antd';
import React from 'react';

const { Title } = Typography;

const App = () => (
  <div id="empty-component">
    <Title level={2}>Empty component:</Title>
    <Title level={5}>Basic:</Title>
    <Empty />
    <Divider />
  </div>
);

export default App;
