import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  jobSearchSidebar: [
    {
      type: 'category',
      label: '취업 영어',
      collapsed: false,
      items: [
        'job-search/intro',
        'job-search/resume',
        'job-search/cover-letter',
        'job-search/linkedin',
        'job-search/interview',
      ],
    },
  ],

  workplaceSidebar: [
    {
      type: 'category',
      label: '직장 소통',
      collapsed: false,
      items: [
        'workplace/intro',
        'workplace/email',
        'workplace/meetings',
        'workplace/slack-teams',
        'workplace/small-talk',
        'workplace/presentations',
      ],
    },
  ],

  cultureSidebar: [
    {
      type: 'category',
      label: '미국 직장 문화',
      collapsed: false,
      items: [
        'culture/intro',
        'culture/etiquette',
        'culture/feedback',
        'culture/idioms',
      ],
    },
  ],

  phrasebookSidebar: [
    {
      type: 'category',
      label: '표현 사전',
      collapsed: false,
      items: [
        'phrasebook/intro',
        'phrasebook/daily',
        'phrasebook/requests',
        'phrasebook/disagreeing',
      ],
    },
  ],
};

export default sidebars;
