import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const translateTexts = [
  {
    desc: "title 1",
    text: "獨立模組"
  },
  {
    desc: "desc 1",
    text: "皆為獨立工具系統，透過 UPM 可單獨安裝、單獨使用，需要什麼裝什麼，彼此互不強制綁定，隨插即用。"
  },
  {
    desc: "title 2",
    text: "加快開發"
  },
  {
    desc: "desc 2",
    text: "涵蓋遊戲開發常用系統：日誌、無限列表、動作序列、紅點通知、輸入控制、補間動畫、時間、物件池、存檔、本地化等，免於重複造輪子，支持 Win, OSX, Android, iOS, WebGL。"
  },
  {
    desc: "title 3",
    text: "調用容易"
  },
  {
    desc: "desc 3",
    text: "高內聚低耦合，各系統透過簡潔 API 進行操作，並附有完整 Example 與 AI Agent Skills，上手即用，提升可讀性、維護性。"
  },
];

const FeatureList = [
  {
    title: <Translate>{translateTexts[0].text}</Translate>,
    Svg: require('@site/static/img/index/flexibility.svg').default,
    description: (
      <>
        <Translate>{translateTexts[1].text}</Translate>
      </>
    ),
  },
  {
    title: <Translate>{translateTexts[2].text}</Translate>,
    Svg: require('@site/static/img/index/performance.svg').default,
    description: (
      <>
        <Translate>{translateTexts[3].text}</Translate>
      </>
    ),
  },
  {
    title: <Translate>{translateTexts[4].text}</Translate>,
    Svg: require('@site/static/img/index/easy.svg').default,
    description: (
      <>
        <Translate>{translateTexts[5].text}</Translate>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
