import { UserOutlined } from '@ant-design/icons';
import { Input, Typography } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

const InputMain = () => (
  <div className="body-space">
    <Title level={2}>Input field main page:</Title>
    <Title level={4}>Three sizes of Input:</Title>
    <Paragraph>
      There are three sizes of an Input box: <code>large</code> (40px),{' '}
      <code>default</code> (32px) and <code>small</code> (24px).
    </Paragraph>
    <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input placeholder="default size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
  </div>
);

export default InputMain;
