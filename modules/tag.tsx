import { Tag, Typography, Divider } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

const log = (e: any) => {
  console.log(e);
};

const preventDefault = (e: any) => {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
};

const App = () => (
  <div className="tag-component">
    <Title level={2}>Tag component:</Title>
    <Title level={5}>Basic tag:</Title>
    <Tag>Tag 1</Tag>
    <Tag>
      <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
    </Tag>
    <Tag closable onClose={log}>
      Tag 2
    </Tag>
    <Tag closable onClose={preventDefault}>
      Prevent Default
    </Tag>
    <Divider />
  </div>
);

export default App;
