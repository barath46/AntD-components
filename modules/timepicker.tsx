import { TimePicker, Typography, Divider } from 'antd';
import moment from 'moment';
import React from 'react';

const { Title } = Typography;

const onChange = (time, timeString) => {
  console.log(time, timeString);
};

const App = () => (
  <div id="timePicker-component">
    <Title level={2}>Timepicker component:</Title>
    <Title level={5}>Basic:</Title>
    <TimePicker
      onChange={onChange}
      defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
    />
    <br />
    <br />
    <Title level={5}>Time Range Picker:</Title>
    <TimePicker.RangePicker />
    <Divider />
  </div>
);

export default App;
