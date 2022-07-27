import { InputNumber, Typography, Divider, Button, Space } from 'antd';
import { SettingOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const { Title, Paragraph } = Typography;

const onChange = (value: number) => {
  console.log('changed', value);
};

const App: React.FC = () => {
  const [value, setValue] = useState<string | number>('99');
  return (
    <div id="input-number-component">
      <Title level={2}>InputNumber component:</Title>
      <Paragraph>
        Enter a number within certain range with the mouse or keyboard.
      </Paragraph>
      <br />
      <Title level={5}>Basic InputNumber</Title>
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
      <br />
      <br />
      <Title level={5}>Pre/Post Tab</Title>
      <InputNumber addonAfter={<SettingOutlined />} defaultValue={100} />
      <br />
      <br />
      <Title level={5}>Out of range InputNumber</Title>
      <Space>
        <InputNumber min={1} max={10} value={value} onChange={setValue} />
        <Button
          type="primary"
          onClick={() => {
            setValue(99);
          }}
        >
          Reset
        </Button>
      </Space>
      <br />
      <br />
      <Title level={5}>InputNumber with icon</Title>
      <InputNumber
        addonBefore={<UserOutlined />}
        prefix="￥"
        style={{ width: '100%' }}
      />
      <br />
      <br />
      <Title level={5}>InputNumber with status</Title>
      <InputNumber status="warning" style={{ width: '100%' }} />
      <Divider />
    </div>
  );
};

export default App;
