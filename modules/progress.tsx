import { Progress, Typography, Divider } from 'antd';
import { red, green } from '@ant-design/colors';
import React from 'react';

const { Title } = Typography;

const App = () => (
  <div id="progress-component">
    <Title level={2}>Progress component:</Title>
    <Title level={5}>Progress bar:</Title>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
    <br />
    <br />
    <Title level={5}>Circular progress bar:</Title>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
    <br />
    <br />
    <Title level={5}>Progress bar with steps:</Title>
    <Progress percent={50} steps={3} />
    <br />
    <Progress percent={30} steps={5} />
    <br />
    <Progress percent={100} steps={5} size="small" strokeColor={green[6]} />
    <br />
    <Progress
      percent={60}
      steps={5}
      strokeColor={[green[6], green[6], red[5]]}
    />
    <Divider />
  </div>
);

export default App;
