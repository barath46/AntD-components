import { Breadcrumb, Typography, Divider, Menu } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            General
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            Layout
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            Navigation
          </a>
        ),
      },
    ]}
  />
);

const App = () => (
  <div id="breadcrumb-component">
    <Title level={2}>Breadcrumb component:</Title>
    <Paragraph>
      A breadcrumb displays the current location within a hierarchy. It allows
      going back to states higher up in the hierarchy.
    </Paragraph>

    <Title level={5}>Basic Breadcrumb:</Title>
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
    <br />

    <Title level={5}>Bread crumbs with drop down menu: </Title>
    <Breadcrumb>
      <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Component</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item overlay={menu}>
        <a href="">General</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Button</Breadcrumb.Item>
    </Breadcrumb>
    <Divider />
  </div>
);

export default App;
