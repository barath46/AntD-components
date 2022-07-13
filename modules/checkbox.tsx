import { Checkbox, Typography, Button, Divider } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import React, { useState } from 'react';

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const { Title, Paragraph } = Typography;

const App: React.FC = () => {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
  };

  const label = `${checked ? 'Checked' : 'Unchecked'}-${
    disabled ? 'Disabled' : 'Enabled'
  }`;
  return (
    <div className="checkbox-component">
      <Title level={2}>Checkbox component:</Title>
      <Paragraph>
        Checkbox is used for selecting multiple values from several options.
      </Paragraph>
      <br />
      <br />
      <Title level={5}>Basic Checkbox</Title>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
      <br />
      <br />
      <Title level={5}>Controlled Checkbox</Title>
      <Paragraph style={{ marginBottom: '20px' }}>
        <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
          {label}
        </Checkbox>
      </Paragraph>
      <Paragraph>
        <Button type="primary" size="small" onClick={toggleChecked}>
          {!checked ? 'Check' : 'Uncheck'}
        </Button>
        <Button
          style={{ margin: '0 10px' }}
          type="primary"
          size="small"
          onClick={toggleDisable}
        >
          {!disabled ? 'Disable' : 'Enable'}
        </Button>
      </Paragraph>
      <Divider />
    </div>
  );
};

export default App;
