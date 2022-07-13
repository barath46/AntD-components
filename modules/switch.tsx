import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Typography, Divider } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

const App: React.FC = () => (
  <div className="switch-component">
    <Title level={2}>Switch component:</Title>
    <Paragraph>
      Switch is used if you need to represent the switching between two states
      or on-off state.
    </Paragraph>
    <br />
    <Title level={5}>Basic switch </Title>
    <Switch defaultChecked />
    <br />
    <br />
    <Title level={5}>Switch with text & icon</Title>
    <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
    <Divider />
  </div>
);

export default App;
