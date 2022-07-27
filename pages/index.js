import { Anchor, BackTop, Button } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import React from 'react';

const { Link } = Anchor;

function importAll(r) {
  let files = {};
  r.keys()
    .filter((item) => {
      return !item.startsWith('modules');
    })
    .map((item, index) => {
      files[item.replace('./', '')] = r(item).default;
    });
  return files;
}

const components = importAll(require.context('../modules', false, /\.(tsx)$/));
console.log(components);

export default function IndexPage() {
  return (
    <div className="body-space">
      <Anchor affix={false} className="anchor-list">
        <Link href="#alert-component" title="Alert" />
        <Link href="#autoComplete-component" title="Auto complete" />
        <Link href="#avatar-component" title="Avatar" />
        <Link href="#badge-component" title="Badge" />
        <Link href="#breadcrumb-component" title="Breadcrumb" />
        <Link href="#button-component" title="Button" />
        <Link href="#calendar-component" title="Calendar" />
        <Link href="#card-component" title="Card" />
        <Link href="#carousel-component" title="Carousel" />
        <Link href="#cascader-component" title="Cascader" />
        <Link href="#checkbox-component" title="Checkbox" />
        <Link href="#collapse-component" title="Collapse" />
        <Link href="#collapse-component" title="Collapse" />
        <Link href="#datepicker-component" title="Datepicker" />
        <Link href="#divider-component" title="Divider" />
        <Link href="#drawer-component" title="Drawer" />
        <Link href="#dropdown-component" title="Dropdown" />
        <Link href="#empty-component" title="Empty" />
        <Link href="#form-component" title="Form" />
        <Link href="#image-component" title="Image" />
        <Link href="#input-component" title="input" />
        <Link href="#input-number-component" title="Input Number" />
        <Link href="#menu-component" title="Menu" />
        <Link href="#messaage-component" title="Message" />
        <Link href="#modal-component" title="Modal" />
        <Link href="#notification-component" title="Notification" />
        <Link href="#pagination-component" title="Pagination" />
        <Link href="#popconfirm-component" title="Popconfirm" />
        <Link href="#popover-component" title="Popover" />
        <Link href="#progress-component" title="Progress" />
        <Link href="#radio-component" title="Radio" />
        <Link href="#rate-component" title="Rate" />
        <Link href="#result-component" title="Result" />
        <Link href="#select-component" title="Select" />
        <Link href="#skeleton component" title="Skeleton" />
        <Link href="#slider-component" title="Slider" />
        <Link href="#spin-component" title="Spin" />
        <Link href="#step-component" title="Steps" />
        <Link href="#switch-component" title="Switch" />
        <Link href="#table-component" title="Table" />
        <Link href="#tabs-component" title="Tabs" />
        <Link href="#tag-component" title="Tag" />
        <Link href="#timeline-component" title="Timeline" />
        <Link href="#timePicker-component" title="Timepicker" />
        <Link href="#tooltip-component" title="Tooltip" />
        <Link href="#typography-component" title="Typography" />
        <Link href="#upload-component" title="Upload" />
      </Anchor>
      {Object.entries(components).map(([key, Component], index) => {
        return <Component key={index} />;
      })}
      <BackTop>
        <Button type="primary" icon={<ArrowUpOutlined />}>
          Scroll to top
        </Button>
      </BackTop>
    </div>
  );
}
