import { Button, Result, Divider, Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

const App = () => (
  <div id="result-component">
    <Title level={2}>Result component:</Title>
    <Title level={5}>Success:</Title>
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
    <br />
    <br />
    <Title level={5}>403:</Title>
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button type="primary">Back Home</Button>}
    />
    <br />
    <br />
    <Title level={5}>404:</Title>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
    <br />
    <br />
    <Title level={5}>500:</Title>
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Button type="primary">Back Home</Button>}
    />
    <Divider />
  </div>
);

export default App;
