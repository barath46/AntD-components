import { Input, Typography, Divider, Tooltip } from 'antd';
import {
  InfoCircleOutlined,
  UserOutlined,
  AlertOutlined,
} from '@ant-design/icons';
import React from 'react';
import Link from 'next/link';

const { Title, Paragraph } = Typography;

const { Search, TextArea } = Input;

const onSearch = (value: string) => console.log(value);

const App: React.FC = () => {
  return (
    <div className="input-component">
      <Title level={2}>Input component:</Title>
      <Paragraph>
        A basic widget for getting the user input is a text field. Keyboard and
        mouse can be used for providing or changing data.
      </Paragraph>
      <br />
      <Title level={5}> Basic Input</Title>
      <Input placeholder="Basic usage" />
      <br />
      <br />
      <Title level={5}> Pre/Post Tab</Title>
      <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
      <br />
      <br />
      <Title level={5}>Search Box</Title>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      <br />
      <br />
      <Title level={5}>Search Box with loading</Title>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        loading
      />
      <br />
      <br />
      <Title level={5}>Text Area</Title>
      <TextArea rows={4} />
      <br />
      <br />
      <Title level={5}>Input with icon</Title>
      <Input
        placeholder="Enter your username"
        prefix={<UserOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title="Extra information">
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        }
      />
      <br />
      <br />
      <Title level={5}>Input with status</Title>
      <Input status="error" placeholder="Error" />
      <br />
      <br />
      <Link href="/input-main">
      <a><span><AlertOutlined /> </span> Click here to see input main page</a>
      </Link>
      <Divider />
    </div>
  );
};

export default App;
