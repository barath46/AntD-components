import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Typography, Divider } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

const menuOne = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: '3',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: '4',
        danger: true,
        label: 'a danger item',
      },
    ]}
  />
);

const menuTwo = (
  <Menu
    items={[
      {
        key: '1',
        type: 'group',
        label: 'Group title',
        children: [
          {
            key: '1-1',
            label: '1st menu item',
          },
          {
            key: '1-2',
            label: '2nd menu item',
          },
        ],
      },
      {
        key: '2',
        label: 'sub menu',
        children: [
          {
            key: '2-1',
            label: '3rd menu item',
          },
          {
            key: '2-2',
            label: '4th menu item',
          },
        ],
      },
      {
        key: '3',
        label: 'disabled sub menu',
        disabled: true,
        children: [
          {
            key: '3-1',
            label: '5d menu item',
          },
          {
            key: '3-2',
            label: '6th menu item',
          },
        ],
      },
    ]}
  />
);

const App = () => (
  <div className="dropdown-component">
    <Title level={2}>Dropdown component:</Title>
    <Title level={5}>Basic Dropdown:</Title>
    <Dropdown overlay={menuOne}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
    <br /><br />

    <Title level={5}>Cascading dropdown:</Title>
    <Dropdown overlay={menuTwo}>
      <a onClick={e => e.preventDefault()}>
        <Space>
          Cascading menu
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
    <Divider />
  </div>
);

export default App;
