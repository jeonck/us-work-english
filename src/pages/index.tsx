import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const sections = [
  {
    title: '취업 영어',
    emoji: '📄',
    description: '이력서, 커버레터, 링크드인, 인터뷰까지 — 미국 취업의 처음부터 끝까지',
    link: '/docs/job-search/intro',
  },
  {
    title: '직장 소통',
    emoji: '💬',
    description: '이메일, 미팅, 슬랙, 스몰토크, 발표 — 일터에서 매일 쓰는 영어',
    link: '/docs/workplace/intro',
  },
  {
    title: '미국 직장 문화',
    emoji: '🏢',
    description: '예절, 피드백 문화, 비즈니스 이디엄 — 언어 너머의 소통 방식',
    link: '/docs/culture/intro',
  },
  {
    title: '표현 사전',
    emoji: '📖',
    description: '상황별로 바로 꺼내 쓰는 표현 모음 — 외우지 말고 찾아 쓰세요',
    link: '/docs/phrasebook/intro',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/workplace/intro">
            직장 소통 바로 시작하기
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            style={{marginLeft: '1rem'}}
            to="/docs/job-search/intro">
            취업 영어 보기
          </Link>
        </div>
      </div>
    </header>
  );
}

function SectionCard({title, emoji, description, link}: typeof sections[0]) {
  return (
    <div className="col col--3">
      <div className="card margin--sm" style={{height: '100%'}}>
        <div className="card__header">
          <h3>{emoji} {title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--primary button--block" to={link}>
            바로 가기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="미국 직장에서 자신 있게 소통하기 위한 실용 영어 가이드">
      <HomepageHeader />
      <main>
        <section style={{padding: '3rem 0'}}>
          <div className="container">
            <div className="row">
              {sections.map((s) => (
                <SectionCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </section>
        <section style={{background: 'var(--ifm-color-emphasis-100)', padding: '3rem 0'}}>
          <div className="container" style={{textAlign: 'center'}}>
            <Heading as="h2">이 사이트는 이런 분을 위해 만들었습니다</Heading>
            <div className="row" style={{marginTop: '1.5rem', justifyContent: 'center'}}>
              {[
                '미국 취업을 준비하고 있는 분',
                '미국 회사에 갓 입사한 분',
                '영어 이메일·미팅이 여전히 어색한 분',
                '미국 직장 문화가 낯선 분',
              ].map((item) => (
                <div key={item} className="col col--5" style={{margin: '0.5rem'}}>
                  <div style={{
                    background: 'var(--ifm-card-background-color)',
                    borderRadius: '8px',
                    padding: '1rem',
                    border: '1px solid var(--ifm-color-emphasis-200)',
                  }}>
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
