import { Spin, Typography, Alert, Divider } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';

const { Title } = Typography;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const App: React.FC = () => {
  return (
    <div className="spin-component">
      <Title level={2}>Spin component:</Title>
      <Title level={5}>Basic Spin</Title>
      <br />
      <Spin />
      <br />
      <br />
      <Title level={5}>Custom Spin</Title>
      <br />
      <Spin indicator={antIcon} />
      <br />
      <br />
      <Title level={5}>Custom Spin Description</Title>
      <br />
      <Spin tip="Loading...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
      <Divider />
    </div>
  );
};

export default App;
