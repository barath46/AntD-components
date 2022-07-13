import { Carousel, Typography, Divider } from 'antd';
import React from 'react';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const { Title, Paragraph } = Typography;

const App: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div className="carousel-component">
      <Title level={2}>Carousel component:</Title>
      <Paragraph>
        Carousel is used when there is a group of content on the same level or
        when there is insufficient content space, it can be used to save space
        in the form of a revolving door.
      </Paragraph>
      <br />
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <Divider />
    </div>
  );
};

export default App;
