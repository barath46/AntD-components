import { Divider, Typography } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

const App: React.FC = () => (
  <div id="divider-component">
    <Title level={2}>Divider component:</Title>
    <Paragraph>Divide sections of article.</Paragraph>
    <Divider />
    <Paragraph>
      Divide inline text and links such as the operation column of table.
    </Paragraph>
    <Divider dashed />
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </Paragraph>
    <Divider plain>Text</Divider>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </Paragraph>
    <Divider>Text</Divider>
  </div>
);

export default App;
