import { message, Popconfirm, Typography, Divider } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';

const { Title, Paragraph } = Typography;

const confirm = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.success('Click on Yes');
};

const cancel = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.error('Click on No');
};

const App: React.FC = () => {
  return (
    <div className="popconfirm-component">
      <Title level={2}>Popconfirm component:</Title>
      <Paragraph>
        A simple and compact confirmation dialog of an action.
      </Paragraph>
      <Title level={5}>Basic Popconfirm</Title>
      <Popconfirm
        title="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <a href="#">Delete</a>
      </Popconfirm>
      <br />
      <br />
      <Title level={5}>Popconfirm with customised icon</Title>
      <Popconfirm
        title="Are you sure？"
        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      >
        <a href="#">Delete</a>
      </Popconfirm>
      <Divider />
    </div>
  );
};

export default App;
