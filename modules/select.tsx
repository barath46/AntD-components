import { Select, Typography, Divider, Space } from 'antd';
import React from 'react';
const { Option } = Select;

const { Title } = Typography;

const children: React.ReactNode[] = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const handleTagChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App = () => (
  <div id="select-component">
    <Title level={2}>Select component:</Title>
    <Title level={5}>Basic select:</Title>
    <Space>
      <Select
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Select
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        disabled
      >
        <Option value="lucy">Lucy</Option>
      </Select>
      <Select
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        loading
      >
        <Option value="lucy">Lucy</Option>
      </Select>
      <Select
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        allowClear
      >
        <Option value="lucy">Lucy</Option>
      </Select>
    </Space>
    <br />
    <br />
    <Title level={5}>Tag select:</Title>
    <Select
      mode="tags"
      style={{ width: '100%' }}
      placeholder="Tags Mode"
      onChange={handleTagChange}
    >
      {children}
    </Select>
    <Divider />
  </div>
);

export default App;
