import { Button, Timeline, Typography, Divider } from 'antd';
import React, { useState } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const App: React.FC = () => {
  const [reverse, setReverse] = useState(false);

  const handleClick = () => {
    setReverse(!reverse);
  };

  return (
    <div id="timeline-component">
      <Title level={2}>Timeline component:</Title>
      <Paragraph>
        When a series of information needs to be ordered by time (ascending or
        descending).
      </Paragraph>
      <br />
      <Title level={5}>Basic Timeline</Title>
      <Timeline pending="Recording..." reverse={reverse}>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
      </Timeline>
      <Button type="primary" style={{ marginTop: 16 }} onClick={handleClick}>
        Toggle Reverse
      </Button>
      <br />
      <br />
      <br />
      <Title level={5}>Custom Timeline</Title>
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item
          dot={<ClockCircleOutlined className="timeline-clock-icon" />}
          color="red"
        >
          Technical testing 2015-09-01
        </Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
      <Divider />
    </div>
  );
};

export default App;
