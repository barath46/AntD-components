import { Collapse, Typography, Divider } from 'antd';
import React from 'react';

const { Title } = Typography;

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const App = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div id="collapse-component">
      <Title level={2}>Collapse component:</Title>
      <Title level={5}>Basic:</Title>
      <Collapse defaultActiveKey={['1']} onChange={onChange}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
      <br />
      <br />
      <Title level={5}>Ghost Collapse:</Title>
      <Collapse defaultActiveKey={['1']} ghost>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
      <Divider />
    </div>
  );
};

export default App;
