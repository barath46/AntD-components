import { Skeleton, Typography, Divider } from 'antd';
import React from 'react';

const { Title } = Typography;

const App = () => (
  <div id="skeleton component">
    <Title level={2}>Skeleton component:</Title>
    <Title level={5}>Basic:</Title>
    <Skeleton />
    <br />
    <br />
    <Title level={5}>Complex combination:</Title>
    <Skeleton avatar paragraph={{ rows: 4 }} />
    <Divider />
  </div>
);

export default App;
