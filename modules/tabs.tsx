import { Tabs, Typography, Divider } from 'antd';
import React from 'react';
const { TabPane } = Tabs;

const { Title, Paragraph } = Typography;

const onChange = (key: any) => {
  console.log(key);
};

const App = () => (
  <div id="tabs-component">
    <Title level={2}>Tabs component:</Title>
    <Title level={5}>Basic tab:</Title>
    <Tabs defaultActiveKey="1" onChange={onChange}>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
    <br />
    <br />

    <Title level={5}>Card type tab:</Title>
    <Tabs onChange={onChange} type="card">
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
    <Divider />
  </div>
);

export default App;
