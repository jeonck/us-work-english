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
      collapsed: true,
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

  readingSidebar: [
    {
      type: 'category',
      label: '원서 읽기',
      collapsed: false,
      items: [
        'reading/intro',
        'reading/how-to-choose',
        'reading/strategies',
        'reading/vocabulary',
        'reading/booklist',
        {
          type: 'category',
          label: 'When You Trap a Tiger',
          collapsed: false,
          items: [
            'reading/when-you-trap-a-tiger/intro',
            'reading/when-you-trap-a-tiger/save-the-day',
            'reading/when-you-trap-a-tiger/magic',
            'reading/when-you-trap-a-tiger/come-in-handy',
            'reading/when-you-trap-a-tiger/wrap-in-invisibility',
            'reading/when-you-trap-a-tiger/up-a-notch',
            'reading/when-you-trap-a-tiger/slug-slow',
            'reading/when-you-trap-a-tiger/inch-past',
            'reading/when-you-trap-a-tiger/inside-joke',
            'reading/when-you-trap-a-tiger/smacks-k',
            'reading/when-you-trap-a-tiger/tap-taps-back-home',
            'reading/when-you-trap-a-tiger/i-wonder-let-myself',
            'reading/when-you-trap-a-tiger/good-attitude',
            'reading/when-you-trap-a-tiger/shoves-glasses',
            'reading/when-you-trap-a-tiger/how-can-you-even',
            'reading/when-you-trap-a-tiger/how-it-always-starts',
          ],
        },
      ],
    },
  ],

  listeningSidebar: [
    {
      type: 'category',
      label: '영어 듣기',
      collapsed: false,
      items: [
        'listening/intro',
        'listening/accents',
        'listening/meetings',
        'listening/shadowing',
        'listening/resources',
        {
          type: 'category',
          label: '매일 듣기',
          collapsed: false,
          items: [
            'listening/daily',
            {
              type: 'category',
              label: '폭스뉴스 듣기',
              collapsed: false,
              items: [
                'listening/fox-news/intro',
                'listening/fox-news/2026-05-01',
              ],
            },
          ],
        },
      ],
    },
  ],

  speakingSidebar: [
    {
      type: 'category',
      label: '영어 말하기',
      collapsed: false,
      items: [
        'speaking/intro',
        'speaking/pronunciation',
        'speaking/fluency',
        'speaking/fillers',
        'speaking/practice',
        'speaking/daily',
      ],
    },
  ],
};

export default sidebars;
