import { Button, message, Typography, Divider } from 'antd';
import React from 'react';

const { Title } = Typography;

const info = () => {
  message.info('This is a normal message');
};

const success = () => {
  message.success('This is a success message');
};

const error = () => {
  message.error('This is an error message');
};

const warning = () => {
  message.warning('This is a warning message');
};

const successOne = () => {
  message
    .loading('Action in progress..', 2.5)
    .then(() => message.success('Loading finished', 2.5))
    .then(() => message.info('Loading finished is finished', 2.5));
};

const App: React.FC = () => {
  return (
    <div className="messaage-component">
      <Title level={2}>Message component:</Title>
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
      <br />
      <br />
      <Button onClick={success}>Success</Button>
      <br />
      <br />
      <Button onClick={error}>Error</Button>
      <br />
      <br />
      <Button onClick={warning}>Warning</Button>
      <br />
      <br />
      <Button onClick={successOne}>Display sequential messages</Button>
      <Divider />
    </div>
  );
};

export default App;
