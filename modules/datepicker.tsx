import { DatePicker, Space, Typography, Divider } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

const { RangePicker } = DatePicker;

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const App = () => (
  <div id="datepicker-component">
    <Title level={2}>Datepicker component:</Title>
    <Title level={5}>Basic datepicker:</Title>
    <Space direction="vertical">
      <DatePicker onChange={onChange} />
      <DatePicker onChange={onChange} picker="week" />
      <DatePicker onChange={onChange} picker="month" />
      <DatePicker onChange={onChange} picker="quarter" />
      <DatePicker onChange={onChange} picker="year" />
    </Space>
    <br />
    <br />
    <Title level={5}>Range picker:</Title>
    <Space direction="vertical" size={12}>
      <RangePicker />
      <RangePicker showTime />
    </Space>
    <Divider />
  </div>
);

export default App;
