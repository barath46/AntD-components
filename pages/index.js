import { Anchor } from 'antd';

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
      <Anchor>
        <Link href="#alert-component" title="Basic demo" />
        <Link href="#autoComplete-component" title="Static demo" />
        <Link href="#avatar-component" title="API" />
      </Anchor>
      {Object.entries(components).map(([key, Component], index) => {
        return <Component key={index} />;
      })}
    </div>
  );
}
