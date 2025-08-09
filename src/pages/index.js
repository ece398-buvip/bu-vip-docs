import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Bradley University ECE 398 Vertically Integrated Projects Documentation">
      <HomepageHeader />
      <main>
        <h1 className={styles.header}>
          Welcome to Bradley University VIP class' online documentation.
        </h1>
        <p className={styles.paragraph}>
          Dive strait into the <a href='docs'>the docs</a>, or check out
          the <a target='_blank' href='https://vip.bradley.edu'>vip.bradley.edu</a> website.
        </p>
      </main>
    </Layout>
  );
}
