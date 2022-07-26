import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Typography, Space, Image, Tooltip, Divider } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

const App = () => (
  <div id="avatar-component">
    <Title level={2}>Avatar component:</Title>
    <Title level={5}>Basic Avatar:</Title>
    <Paragraph>Three sizes and two shapes are available.</Paragraph>
    <div className="mb24">
      <Space>
        <Avatar size={64} icon={<UserOutlined />} />
        <Avatar size="large" icon={<UserOutlined />} />
        <Avatar icon={<UserOutlined />} />
        <Avatar size="small" icon={<UserOutlined />} />
      </Space>
    </div>
    <Space>
      <Avatar shape="square" size={64} icon={<UserOutlined />} />
      <Avatar shape="square" size="large" icon={<UserOutlined />} />
      <Avatar shape="square" icon={<UserOutlined />} />
      <Avatar shape="square" size="small" icon={<UserOutlined />} />
    </Space>
    <br /> <br />
    <Title level={5}>Avatar Types:</Title>
    <Paragraph>
      Image, Icon and letter are supported, and the latter two kinds of avatar
      can have custom colors and background colors.
    </Paragraph>
    <Space>
      <Avatar icon={<UserOutlined />} />
      <Avatar>U</Avatar>
      <Avatar size={40}>USER</Avatar>
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <Avatar
        src={
          <Image
            src="https://joeschmoe.io/api/v1/random"
            style={{ width: 32 }}
          />
        }
      />
      <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
        U
      </Avatar>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </Space>
    <br />
    <br />
    <Title level={5}>Avatar Group:</Title>
    <Paragraph>Avatar group display.</Paragraph>
    <div>
      <Avatar.Group>
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
        <Tooltip title="Ant User" placement="top">
          <Avatar
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar
          style={{ backgroundColor: '#1890ff' }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
    </div>
    <br />
    <div>
      <Avatar.Group
        maxCount={2}
        maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
      >
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
        <Tooltip title="Ant User" placement="top">
          <Avatar
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar
          style={{ backgroundColor: '#1890ff' }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
    </div>
    <Divider />
  </div>
);

export default App;
