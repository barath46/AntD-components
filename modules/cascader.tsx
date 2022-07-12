import { Cascader, Divider, Typography, Space } from 'antd';
import React, { useState } from 'react';
import { isWhiteSpaceLike } from 'typescript/lib/tsserverlibrary';

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const { Title, Paragraph } = Typography;

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const [text, setText] = useState('Unselect');

  const onChange = (_: string[], selectedOptions: Option[]) => {
    setText(selectedOptions.map((o) => o.label).join(', '));
  };
  return (
    <div className="cascader-component">
      <Title level={2}>Cascader component:</Title>
      <Paragraph>
        Cascader is used when you need to select from a set of associated data
        set. Such as province/city/district, company level, things
        classification or when selecting from a large data set, with multi-stage
        classification separated for easy selection.
      </Paragraph>
      <br />
      <br />
      <Title level={5}>Basic cascader </Title>
      <Cascader options={options} placeholder="Please select" />
      <br />
      <br />
      <Title level={5}>Custom trigger cascader</Title>
      <Space>
        {text}
        &nbsp;
        <Cascader options={options} onChange={onChange}>
          <a href="#">Change city</a>
        </Cascader>
      </Space>
      <br />
      <br />
      <Title level={5}>Multiple option cascader</Title>
      <Cascader
        style={{ width: '100%' }}
        options={options}
        multiple
        maxTagCount="responsive"
      />
      <br />
      <br />
      <Title level={5}>Cascader with status</Title>
      <Space direction="vertical">
        <Cascader status="error" placeholder="Error" />
        <Cascader status="warning" multiple placeholder="Warning multiple" />
      </Space>
      <Divider />
    </div>
  );
};

export default App;
