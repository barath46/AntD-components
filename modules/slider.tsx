import { Slider, Typography, Divider } from 'antd';
import React from 'react';

const { Title } = Typography;

const style: React.CSSProperties = {
  display: 'inline-block',
  height: 300,
  marginLeft: 70,
};

const App = () => {
  return (
    <div id="slider-component">
      <Title level={2}>Slider component:</Title>
      <Title level={5}>Basic Slider:</Title>
      <Slider defaultValue={30} />
      <Slider range defaultValue={[20, 50]} disabled />
      <br />
      <br />
      <Title level={5}>Vertical slider:</Title>
      <div style={style}>
        <Slider vertical defaultValue={30} />
      </div>
      <Divider />
    </div>
  );
};

export default App;
