import { Rate, Typography, Divider } from 'antd';
import React, { useState } from 'react';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const { Title, Paragraph } = Typography;

const App: React.FC = () => {
  const [value, setValue] = useState(3);

  return (
    <div className="rate-component">
      <Title level={2}>Rate component:</Title>
      <Paragraph>Rate component</Paragraph>
      <br />
      <Title level={5}>Basic Rate</Title>
      <Rate />
      <br />
      <br />
      <Title level={5}>Rate with copywriting</Title>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
      <Divider />
    </div>
  );
};

export default App;
