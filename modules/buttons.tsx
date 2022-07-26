import { Button, Typography, Space, Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const { Title, Paragraph } = Typography;

const App: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 1000);
  };

  return (
    <div id="button-component">
      <Title level={2}>Buttons component:</Title>
      <Paragraph>
        Button types: <code>primary</code> <code>default</code>{' '}
        <code>dashed</code> <code>text</code> <code>link</code>
      </Paragraph>
      <Paragraph>
        Button properties: <code>danger</code> <code>ghost</code>{' '}
        <code>disabled</code> <code>loading</code>
      </Paragraph>
      <Title level={5}>Basic buttons:</Title>
      <Space wrap={true}>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space>
      <br /> <br />
      <Title level={5}>Buttons with icon:</Title>
      <Paragraph>
        add loading spinner in button, avoiding multiple submits too.
      </Paragraph>
      <Space wrap={true}>
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Button shape="circle" icon={<SearchOutlined />} />
        <Button icon={<SearchOutlined />}>Search</Button>
      </Space>
      <br /> <br />
      <Title level={5}>
        Buttons with <code>danger</code> property:
      </Title>
      <Paragraph>
        used for actions of risk, like deletion or authorization.
      </Paragraph>
      <Space wrap={true}>
        <Button type="primary" danger>
          Primary
        </Button>
        <Button danger>Default</Button>
        <Button type="dashed" danger>
          Dashed
        </Button>
        <Button type="text" danger>
          Text
        </Button>
        <Button type="link" danger>
          Link
        </Button>
      </Space>
      <br /> <br />
      <Title level={5}>
        Buttons with <code>ghost</code> property:
      </Title>
      <Paragraph>
        property will make button's background transparent, it is commonly used
        in colored background.
      </Paragraph>
      <Space wrap={true} className="site-button-ghost-wrapper">
        <Button type="primary" ghost>
          Primary
        </Button>
        <Button ghost>Default</Button>
        <Button type="dashed" ghost>
          Dashed
        </Button>
        <Button type="primary" danger ghost>
          Danger
        </Button>
      </Space>
      <br /> <br />
      <Title level={5}>
        Buttons with <code>disabled</code> property:
      </Title>
      <Paragraph>when actions are not available.</Paragraph>
      <Space wrap={true}>
        <Button type="primary" disabled>
          Primary(disabled)
        </Button>
        <Button disabled>Default(disabled)</Button>
      </Space>
      <br /> <br />
      <Title level={5}>
        Buttons with <code>loading</code> property:
      </Title>
      <Paragraph>
        add loading spinner in button, avoiding multiple submits too.
      </Paragraph>
      <Space wrap={true}>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button
          type="primary"
          loading={loadings[0]}
          onClick={() => enterLoading(0)}
        >
          Click me!
        </Button>
      </Space>
      <br />
      <Divider />
    </div>
  );
};

export default App;
