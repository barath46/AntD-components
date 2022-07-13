import { Radio, Typography, Divider } from 'antd';
import type { RadioChangeEvent } from 'antd';
import React, { useState } from 'react';

const { Title, Paragraph } = Typography;

const App: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="radio-component">
      <Title level={2}>Radio component:</Title>
      <Paragraph>
        Enter a number within certain range with the mouse or keyboard.
      </Paragraph>
      <br />
      <Title level={5}>Basic Radio</Title>
      <Radio>Radio</Radio>
      <br />
      <br />
      <Title level={5}>Radio Group</Title>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
      <br />
      <br />
      <Title level={5}>Radio Button</Title>
      <Radio.Group defaultValue="a">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Title level={5}>Solid radio button</Title>
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
      <Divider />
    </div>
  );
};

export default App;
