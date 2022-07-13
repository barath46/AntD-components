import { Pagination, Typography, Divider } from 'antd';
import React from 'react';

const { Title } = Typography;

const App = () => (
  <div id="pagination-component">
    <Title level={2}>Pagination component:</Title>
    <Title level={5}>Basic Pagination:</Title>
    <Pagination defaultCurrent={1} total={50} />
    <br />
    <br />
    <Title level={5}>More Pages Pagination:</Title>
    <Pagination defaultCurrent={6} total={500} />
    <Divider />
  </div>
);

export default App;
