import { Tooltip, Typography, Divider } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

const App = () => (
  <div id="tooltip-component">
    <Title level={2}>Tooltip component:</Title>
    <Title level={5}>Basic Tooltip:</Title>
    <Tooltip title="prompt text">
      <span>Hover me</span>
    </Tooltip>
    <br />
    <br />
    <Title level={5}>Basic Tooltip:</Title>
    <Tooltip title="prompt text">
      <span>Hover me</span>
    </Tooltip>
    <br />
    <br />
    <Title level={5}>Colorful Tooltip: </Title>
    <Paragraph>
      We preset a series of colorful Tooltip styles for use in different
      situations.
    </Paragraph>
    <Tooltip title="prompt text" color="#f50">
      Hover me
    </Tooltip>
    <Divider />
  </div>
);

export default App;
