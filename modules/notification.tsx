import { Button, notification, Typography, Divider } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import React from 'react';

const { Title } = Typography;

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

const openNotificationWithIcon = (type: NotificationType) => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

const openIconNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
};

const App: React.FC = () => {
  return (
    <div id="notification-component">
      <Title level={2}>Notification component:</Title>
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
      <br />
      <br />
      <Button onClick={() => openNotificationWithIcon('success')}>
        Success
      </Button>
      <br />
      <br />
      <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
      <br />
      <br />
      <Button onClick={() => openNotificationWithIcon('warning')}>
        Warning
      </Button>
      <br />
      <br />
      <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
      <br />
      <br />
      <Button type="primary" onClick={openIconNotification}>
        Open the notification with customised icon
      </Button>
      <Divider />
    </div>
  );
};

export default App;
