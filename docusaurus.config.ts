import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'US Work English',
  tagline: '미국 직장에서 자신 있게 소통하기',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://jeonck.github.io',
  baseUrl: '/us-work-english/',

  organizationName: 'jeonck',
  projectName: 'us-work-english',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '🇺🇸 US Work English',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'jobSearchSidebar',
          position: 'left',
          label: '취업 영어',
        },
        {
          type: 'docSidebar',
          sidebarId: 'workplaceSidebar',
          position: 'left',
          label: '직장 소통',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cultureSidebar',
          position: 'left',
          label: '미국 직장 문화',
        },
        {
          type: 'docSidebar',
          sidebarId: 'phrasebookSidebar',
          position: 'left',
          label: '표현 사전',
        },
        {to: '/blog', label: '학습 팁', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} US Work English. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
