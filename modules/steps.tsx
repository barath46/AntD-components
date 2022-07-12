import { Steps, Divider, Typography } from 'antd';
import React from 'react';
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Step } = Steps;
const { Title, Paragraph } = Typography;

const App: React.FC = () => (
  <div className="step-component">
    <Title level={2}>Step component:</Title>
    <Paragraph>
      Steps is a navigation bar that guides users through the steps of a task.
      When a given task is complicated or has a certain sequence in the series
      of subtasks, we can decompose it into several steps to make things easier.
    </Paragraph>
    <br />
    <Title level={5}>Basic Step</Title>
    <br />
    <Steps current={1}>
      <Step title="Finished" description="This is a description." />
      <Step
        title="In Progress"
        subTitle="Left 00:00:08"
        description="This is a description."
      />
      <Step title="Waiting" description="This is a description." />
    </Steps>
    <br />
    <br />
    <Title level={5}>Step with icon</Title>
    <br />
    <Steps>
      <Step status="finish" title="Login" icon={<UserOutlined />} />
      <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
      <Step status="process" title="Pay" icon={<LoadingOutlined />} />
      <Step status="wait" title="Done" icon={<SmileOutlined />} />
    </Steps>
    <br />
    <br />
    <Title level={5}>Error Status</Title>
    <br />
    <Steps current={1} status="error">
      <Step title="Finished" description="This is a description" />
      <Step title="In Process" description="This is a description" />
      <Step title="Waiting" description="This is a description" />
    </Steps>
    <br />
    <br />
    <Title level={5}>Dot Style</Title>
    <br />
    <Steps progressDot current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
    <br />
    <br />
    <Title level={5}>Steps with progress</Title>
    <br />

    <Steps current={1} percent={60}>
      <Step title="Finished" description="This is a description." />
      <Step
        title="In Progress"
        subTitle="Left 00:00:08"
        description="This is a description."
      />
      <Step title="Waiting" description="This is a description." />
    </Steps>
    <Divider />
  </div>
);

export default App;
